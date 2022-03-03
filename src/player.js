class Player {

    constructor(){
        
        this.ctx = canvas.getContext('2d')
        this.canvas = document.getElementById("canvas")

        this.x = 80;
        this.y = 295;

        this.width = 120;
        this.height = 60;

        this.img = new Image();
        this.img.src = "src/assets/Player.png"
        this.keyDown = this.keyDown.bind(this);
    }
    
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    moveUp() {  
        this.y -= 20
    }    
    
    moveDown() {  
        this.y += 20
    }

    moveLeft() {  
        this.x -= 20
    }    
    
    moveRight() {  
        this.x += 20
    }

    
    keyDown(e) {
        
        if (e.key === "ArrowUp" || e.key === "Up") {
            this.moveUp()
        }
        if (e.key === "ArrowDown" || e.key === "Down") {
            this.moveDown()
        }
        if (e.key === "ArrowLeft" || e.key === "Left") {
            this.moveLeft()
        }
        if (e.key === "ArrowRight" || e.key === "Right") {
            this.moveRight()
        }
    } 

    handleEdges()  {
        if (this.y <= -75) {
            this.y = -75
        }
        if (this.y >= 700) {
            this.y = 700
        }
        if (this.x <= 10) {
            this.x = 10
        }
        if (this.x >= 1000) {
            this.x = 1000
        }
    }
    
}
export default Player;