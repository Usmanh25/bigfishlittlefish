import Player from "./player.js"
import Game from "./game.js"

document.addEventListener("DOMContentLoaded", function(){
    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    
    document.getElementById('play').addEventListener('click', (e) => {
        e.preventDefault();
        const ctx = canvas.getContext('2d');
        document.getElementById('menu').style.display = 'none';
        document.getElementById('canvas').style.display = 'flex';
        const player = new Player();
        const game = new Game(canvas, player);
        window.game = game;
        game.startGame();
        game.update(ctx);
        window.addEventListener('click', game.playMusic())
        document.addEventListener('keydown', player.keyDown);
        document.addEventListener('mousemove', player.mouseMove); 
    
    })

    document.getElementById('restart-button').addEventListener('click', (e) => {
        window.location.reload() //<---------------QUICKFIX BUG FOR PRESENTATION



        // e.preventDefault();
        // const ctx = canvas.getContext('2d');
        // document.getElementById('gameovermenu').style.display = 'none';
        // document.getElementById('canvas').style.display = 'flex';
        // const player = new Player();
        // const game = new Game(canvas, player);
        // window.game = game;
        // game.startGame();
        // game.update(ctx);
        // document.addEventListener('keydown', player.keyDown);
    })

    document.getElementById('replay-button').addEventListener('click', (e) => {
        window.location.reload() //<---------------QUICKFIX BUG FOR PRESENTATION



        // e.preventDefault();
        // const ctx = canvas.getContext('2d');
        // document.getElementById('gamewinmenu').style.display = 'none';
        // document.getElementById('canvas').style.display = 'flex';
        // const player = new Player();
        // const game = new Game(canvas, player);
        // window.game = game;
        // game.startGame();
        // game.update(ctx);
        // document.addEventListener('keydown', player.keyDown);
    })

});

