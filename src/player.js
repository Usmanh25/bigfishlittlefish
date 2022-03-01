class Player {
    
    constructor(){
        this.ctx = canvas.getContext('2d')
        this.canvas = document.getElementById("canvas")
        this.x = 100;
        this.y = 350;
        this.radius = 50;
        this.vel = new Vector()
        // this.speed = 9 <------IDK
        this.img = new Image();
        this.img.src = "https://www.pngpix.com/wp-content/uploads/2016/11/PNGPIX-COM-Tuna-Fish-PNG-Transparent-Image.png"
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
        // this.keyUp = this.keyUp.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    moveUp() {  
        this.y -= 10
        // this.update()
    }    
    
    moveDown() {  
        this.y += 10
        // this.update()
    }

    update() {
        this.draw()
    }

    keyDown(e) {

        console.log(this)

        
        if (e.key === "ArrowUp" || e.key === "Up") {
            this.moveUp()
            console.log("up");

        }
        if (e.key === "ArrowDown" || e.key === "Down") {
            this.moveDown()
            console.log("down");
        }
        // this.update(this.ctx)
    } 

    // keyUp(e) {

    //     if (e.key === "ArrowUp" || e.key === "Up") {
    //         this.y = 0

    //     }
    //     if (e.key === "ArrowDown" || e.key === "Down") {
    //         this.y = 0
    //     }
    //     // this.update(this.ctx)
    // }


    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, 170, 120)

    }

    handleEdges()  {
        if (this.y <= 0 || this.y >= 1200) console.log("running")
    }


}

export default Player;