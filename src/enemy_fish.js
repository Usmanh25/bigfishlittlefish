class EnemyFish {

    constructor(){

        this.ctx = canvas.getContext('2d');
        this.canvas = document.getElementById("canvas");

        this.x = 1200;
        this.y = Math.random() * 800;

        this.width = 120;
        this.height = 60;
        
        this.img = new Image();
        this.img.src = "src/assets/Enemy.png";
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

}

export default EnemyFish;