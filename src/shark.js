class Shark {

    constructor(){
        this.ctx = canvas.getContext('2d')
        this.canvas = document.getElementById("canvas")

        this.x = 1200;
        this.y = Math.random() * (550 - 100) + 100

        this.width = 500
        this.height = 200
        
        this.img = new Image();
        this.img.src = "src/assets/Shark.png"
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    
}

export default Shark;

