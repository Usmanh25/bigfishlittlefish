class EnemyFish2 {

    constructor(){

        this.ctx = canvas.getContext('2d');
        this.canvas = document.getElementById("canvas");

        this.x = 1200;
        this.y = Math.random() * 800;

        this.width = 95;
        this.height = 50;
        
        this.img = new Image();
        this.img.src = "src/assets/Enemy2.png";
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

}

export default EnemyFish2;