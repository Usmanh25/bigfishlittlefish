import Player from "./player.js"
import Game from "./game.js"


document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')

    const player = new Player();
    const game = new Game(canvas, player);

    document.addEventListener('keydown', player.keyDown);

    // document.addEventListener('keyup', player.keyUp);


    game.start();
    // game.play();
    game.update(ctx);

});

