import Player from "./player.js"
import Game from "./game.js"

document.addEventListener("DOMContentLoaded", function(){
    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    const soundOn = document.getElementById("sound-off");
    soundOn.style.display = 'none'

    const soundOff = document.getElementById("sound-on");
    soundOff.style.display = 'none'
    
    document.getElementById('play').addEventListener('click', (e) => {

        e.preventDefault();

        const ctx = canvas.getContext('2d');

        document.getElementById('menu').style.display = 'none';
        document.getElementById('canvas').style.display = 'flex';
        
        window.game = game;
        
        const player = new Player();
        const game = new Game(canvas, player);
        const music = new Audio('src/assets/SpongeBob_Credits_Audio.mp3');
        
        game.startGame();
        game.update(ctx);
        music.play()

        document.addEventListener('keydown', player.keyDown);
        document.addEventListener('mousemove', player.mouseMove); 
        
        soundOn.style.display = 'none'
        soundOff.style.display = 'block'

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

    })

    document.getElementById('restart-button').addEventListener('click', (e) => {
        window.location.reload()
    })

    document.getElementById('replay-button').addEventListener('click', (e) => {
        window.location.reload() 
    })

});