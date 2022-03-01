// Holds collections of the enemy fish, player fish, sharks
// Game.prototype.step method ----- calls Game.prototype.move on all the objects, 
// Game.prototype.checkCollisions ----- checks for colliding objects.
// Game.prototype.draw(ctx) ----- draws the game.

// import EnemyFish from './enemy_fish';
import Player from './player';
import EnemyFish from './enemy_fish';
import Shark from './shark';


class Game {

    constructor(canvas, player){
        
        canvas.width = 1200;
        canvas.height = 700;

        this.ctx = canvas.getContext('2d');

        this.score = 0;

        this.player = player;
        this.enemies = [new EnemyFish(this)];
        this.sharks = [new Shark(this)];

        this.createEnemy = setInterval(() => {
            this.enemies.push(new EnemyFish(this));
        }, 3000)

        this.createShark = setInterval(() => {
            this.sharks.push(new Shark(this));
        }, 3000);

    }

    // DRAW SHARKS
    drawShark(shark) {
        shark.draw()
        shark.x -= 40
    }

    drawSharks() {
        this.sharks.map(shark => {
            this.drawShark(shark)
        })
    }

    // DRAW ENEMIES
    drawEnemy(enemy) {
        enemy.draw()
        enemy.x -= 70
    }

    drawEnemies() {
        this.enemies.map(enemy => {
            this.drawEnemy(enemy)
        })
    }

    //DRAW PLAYER
    drawPlayer() {
        this.player.draw()
        // this.player.x// += 50
    }

    update(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.ctx.fillText('Score: ' + this.score, 10, 50)
        this.ctx.font = '50px Arial'
        this.ctx.fillStyle = 'white'
        this.drawPlayer()
        this.drawEnemies()
        this.drawSharks()
        this.calculateScore()
        // this.player.handleEdges()
    }
    
    calculateScore() {
        this.score = 0
        setInterval(() => { 
            this.score += 500}, 1000
        )
    }

    // hat iterates through the asteroids and alert
    //("COLLISION"); whenever two collide. Make sure not to check if an asteroid collides with itself.



    checkCollision(fish) {
        const allObjects = this.allObjects();
        for (let i = 0; i < allObjects.length; i++) {
          for (let j = 0; j < allObjects.length; j++) {
            const obj1 = allObjects[i];
            const obj2 = allObjects[j];
      
            if (obj1.isCollidedWith(obj2)) {
              const collision = obj1.collideWith(obj2);
              if (collision) return;
            }
          }
        }
    };




    // remove(fish) {
    //     if (fish instanceof EnemyFish) {
    //       this.enemies.splice(this.enemies.indexOf(fish), 1);
    //     } else if (fish instanceof Shark) {
    //       this.player.delete
    //     } else {
    //       throw new Error("unknown type of object");
    //     }
    // };
        
    // keyDown(e) {;

        
    //     if (e.key === "ArrowUp" || e.key === "Up") {
    //         this.player.moveUp()
    //         console.log("up");

    //     }
    //     if (e.key === "ArrowDown" || e.key === "Down") {
    //         this.player.moveDown()
    //         console.log("down");
    //     }
    //     this.update(this.ctx)
    // } 

    // keyUp(e) {

    //     if (e.key === "ArrowUp" || e.key === "Up") {
    //         this.player.y = 0

    //     }
    //     if (e.key === "ArrowDown" || e.key === "Down") {
    //         this.player.y = 0
    //     }
    //     this.update(this.ctx)
    // }

    start() {
        let ctx = this.ctx;
        setInterval(() => { 
            this.update(ctx)}, 100
        )
    }

    // play() {
    //     let player = new Player(this);
    //     this.player.draw();
    // }

}
export default Game;