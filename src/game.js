import EnemyFish from './enemy_fish';
import EnemyFish2 from './enemy_fish2';
import EnemyFish3 from './enemy_fish3';
import Shark from './shark';

class Game {

    constructor(canvas, player){
        
        canvas.width = 1200;
        canvas.height = 700;

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.player = player;
        this.enemies = [new EnemyFish(this)];
        this.enemies2 = [new EnemyFish2(this)];
        this.enemies3 = [new EnemyFish3(this)];
        this.sharks = [new Shark(this)];

        this.createEnemy = setInterval(() => {
            this.enemies.push(new EnemyFish(this));
        }, 2500);

        this.createEnemy2 = setInterval(() => {
            this.enemies2.push(new EnemyFish2(this));
        }, 4000);

        this.createEnemy3 = setInterval(() => {
            this.enemies3.push(new EnemyFish3(this));
        }, 6500);

        this.createShark = setInterval(() => {
            this.sharks.push(new Shark(this));
        }, 11000);

    }

    playSoundEffect() {
        const soundEffect = new Audio('src/assets/Sound_Effect.mp3')
        soundEffect.play()
    }

    startGame() {
        let ctx = this.ctx;

        setInterval(() => { 
            this.update(ctx)}, 50
        )
    }

    winGame() {
        clearInterval(this.createEnemy)
        clearInterval(this.createEnemy2)
        clearInterval(this.createEnemy3)
        clearInterval(this.createShark)
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.enemies = [];
        this.enemies2 = [];
        this.enemies3 = [];
        this.sharks = [];
        this.player = null;
        const menu = document.getElementById('gamewinmenu')
        menu.style.display = 'flex';
    }

    stopGame() {
        clearInterval(this.createEnemy)
        clearInterval(this.createEnemy2)
        clearInterval(this.createEnemy3)
        clearInterval(this.createShark)
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.enemies = [];
        this.enemies2 = [];
        this.enemies3 = [];
        this.sharks = [];
        this.player = null;
        const menu = document.getElementById('gameovermenu');
        menu.style.display = 'flex';
    }
    
    update(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (this.player) {
            this.drawPlayer()
            this.player.handleEdges();
        }
        this.drawEnemies();
        this.drawEnemies2();
        this.drawEnemies3();
        this.drawSharks();
        this.checkCollisionEnemy();
        this.checkCollisionEnemy2();
        this.checkCollisionEnemy3();
        this.checkCollisionShark();
    }

    drawPlayer() {
        this.ctx.rect(this.img, this.x, this.y, this.width, this.height);
        this.player.draw();
    }

    drawShark(shark) {
        shark.draw();
        shark.x -= 7;
    }

    drawSharks() {
        this.sharks.map(shark => {
            this.drawShark(shark);
        });
    }

    drawEnemy(enemy) {
        enemy.draw();
        enemy.x -= 12;
    }

    drawEnemies() {
        this.enemies.map(enemy => {
            this.drawEnemy(enemy);
        });
    }

    drawEnemy2(enemy2) {
        enemy2.draw();
        enemy2.x -= 18;
    }

    drawEnemies2() {
        this.enemies2.map(enemy2 => {
            this.drawEnemy2(enemy2);
        });
    }

    drawEnemy3(enemy3) {
        enemy3.draw();
        enemy3.x -= 8;
    }

    drawEnemies3() {
        this.enemies3.map(enemy3 => {
            this.drawEnemy3(enemy3);
        });
    }
    
    checkCollisionEnemy() {
        this.enemies.forEach(enemy => {
            if (this.player.x < enemy.x + enemy.width &&
                this.player.x + this.player.width > enemy.x &&
                this.player.y < enemy.y + enemy.height &&
                this.player.y + this.player.height > enemy.y) {
                    this.playSoundEffect()
                    this.enemies.splice(this.enemies.indexOf(enemy), 1);
                    this.player.height += 10;
                    this.player.width += 20;
            }
        });
    }

    checkCollisionEnemy2() {
        this.enemies2.forEach(enemy2 => {
            if (this.player.x < enemy2.x + enemy2.width &&
                this.player.x + this.player.width > enemy2.x &&
                this.player.y < enemy2.y + enemy2.height &&
                this.player.y + this.player.height > enemy2.y) {
                    this.playSoundEffect()
                    this.enemies2.splice(this.enemies2.indexOf(enemy2), 1);
                    this.player.height += 20;
                    this.player.width += 40; 
            }
        });
    }

    checkCollisionEnemy3() {
        this.enemies3.forEach(enemy3 => {
            if (this.player.x < enemy3.x + enemy3.width &&
                this.player.x + this.player.width > enemy3.x &&
                this.player.y < enemy3.y + enemy3.height &&
                this.player.y + this.player.height > enemy3.y) {
                    this.playSoundEffect()
                    this.enemies3.splice(this.enemies3.indexOf(enemy3), 1);
                    this.player.height -= 20;
                    this.player.width -= 40;
                    if (this.player.height <= 0) {
                        this.stopGame()
                    }
            }
        })
    }

    checkCollisionShark() {
        this.sharks.forEach(shark => {
            let winner = false

            if (this.player.height > 200 && this.player.width > 450) {
                winner = true
            }

            if (this.player.x < shark.x-150 + shark.width-150 &&
                this.player.x + this.player.width > shark.x+20 &&
                this.player.y < shark.y-50 + shark.height &&
                this.player.y + this.player.height > shark.y+50 && 
                winner === true) {
                    this.playSoundEffect()
                    this.winGame()
            }
                
            if (this.player.x < shark.x-150 + shark.width-150 &&
                this.player.x + this.player.width > shark.x+20 &&
                this.player.y < shark.y-50 + shark.height &&
                this.player.y + this.player.height > shark.y+50 && 
                winner === false) {
                    this.playSoundEffect()
                    this.stopGame()
            }
        })
    }
}
export default Game;