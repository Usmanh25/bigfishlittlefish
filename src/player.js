class Player {

    constructor(){
        
        this.ctx = canvas.getContext('2d')
        this.canvas = document.getElementById("canvas")

        this.canvas.width = 1200;
        this.canvas.height = 700;

        this.x = 80;
        this.y = 295;

        this.width = 120;
        this.height = 60;

        this.img = new Image();
        this.img.src = "src/assets/Player.png"
        this.img2 = new Image();
        this.img2.src = "src/assets/Player_Flip.png"
        this.keyDown = this.keyDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
    }
    
    draw() {
        const currentX = this.x
        const mouse = {x: this.canvas.width/2 + 70}
        
        if (currentX <= mouse.x) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        } else {
            this.ctx.drawImage(this.img2, this.x, this.y, this.width, this.height) 
        }
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
    
    mouseMove(e) {
        const canvasPosition = this.canvas.getBoundingClientRect()
        const mouse = {
            x: this.canvas.width/2,
            y: this.canvas.height/2
        }
        mouse.x = e.x - canvasPosition.left;
        mouse.y = e.y - canvasPosition.top;
    
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
    
        if (mouse.x != this.x) {
            this.x -= dx
        }
        if (mouse.y != this.y) {
            this.y -= dy
        }    
    }

}

export default Player;