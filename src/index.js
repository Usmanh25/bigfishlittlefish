import Player from "./player.js"
import Game from "./game.js"

document.addEventListener("DOMContentLoaded", function(){


    const music = new Audio('src/assets/SpongeBob_Credits_Audio.mp3');
    const soundOff = document.getElementById("sound-on");
    const soundOn = document.getElementById("sound-off");
    soundOn.style.display = 'none'


    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    
    document.getElementById('play').addEventListener('click', (e) => {
        e.preventDefault();
        const ctx = canvas.getContext('2d');
        document.getElementById('menu').style.display = 'none';
        document.getElementById('canvas').style.display = 'flex';
        const player = new Player();
        window.game = game;
        const game = new Game(canvas, player);
        game.startGame();
        game.update(ctx);
        music.play()
        document.addEventListener('keydown', player.keyDown);
        document.addEventListener('mousemove', player.mouseMove); 
        
        // window.addEventListener('click', game.playMusic())


        // soundOff.addEventListener("click", e => {
        //     music.muted = true
        // });
        
        soundOn.addEventListener("click", e => {
            music.muted = false
            soundOn.style.display = "none";
            soundOff.style.display = "block";
        });
        soundOff.addEventListener("click", e => {
            music.muted = true
            soundOff.style.display = "none";
            soundOn.style.display = "block";
        });



        // document.getElementById('mutebutton').addEventListener('click', (e) => {
        //     const game = new Game(canvas, player);
        //     console.log('clickaroo')
        //     game.pauseMusic() 
        // })

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

