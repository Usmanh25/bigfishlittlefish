class Shark {

    constructor(){
        this.ctx = canvas.getContext('2d')
        this.canvas = document.getElementById("canvas")
        this.x = 1200;
        this.y = Math.random() * 700;
        this.radius = 500;
        this.img = new Image();
        this.img.src = "https://www.pikpng.com/pngl/b/231-2317169_great-white-shark-png-great-white-shark-clipart.png"
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, 500, 200)
    }
    
}

export default Shark;

//HOW TO MAKE A CIRCLE
    // this.ctx.fillStyle = 'orange';
    // this.ctx.beginPath();
    // this.ctx.arc(100, 350, 50, 0, 2*Math.PI, true);
    // this.ctx.fill();
    // this.ctx.closePath();
    // this.ctx.stroke()

