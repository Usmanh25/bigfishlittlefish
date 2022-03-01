class EnemyFish {

    constructor(){
        this.ctx = canvas.getContext('2d')
        this.canvas = document.getElementById("canvas")
        this.x = 1200;
        this.y = Math.random() * 700;
        this.radius = 50;
        // this.speed = Math.random() * 5 + 1
        this.img = new Image();
        this.img.src = "https://purepng.com/public/uploads/large/purepng.com-fishfoodfishanimalseamarineoceanseafoodaquatic-981524648618xcscw.png"
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, 150, 80)
    }

}

export default EnemyFish;

//HOW TO MAKE A CIRCLE
    // this.ctx.fillStyle = 'orange';
    // this.ctx.beginPath();
    // this.ctx.arc(100, 350, 50, 0, 2*Math.PI, true);
    // this.ctx.fill();
    // this.ctx.closePath();
    // this.ctx.stroke()