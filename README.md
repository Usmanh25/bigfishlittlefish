# Big Fish, Little Fish

[Play Big Fish, Little Fish!](https://usmanh25.github.io/bigfishlittlefish/)

<img src="https://github.com/Usmanh25/bigfishlittlefish/blob/master/src/assets/Wireframe3.png"></img>

## Overview

"Big Fish Little Fish" is a nautical themed single-player Javascript game with a simple & satisfying user interface, playable for all ages. The player must maneuver around the screen, avoiding sharks and eating fish. The game is won when the player grows larger than the shark and makes contact. The game is lost if the player makes contact with the shark's mouth otherwise.

## Technologies, Libraries, APIs

- Vanilla Javascript
- HTML5
- CSS3
- Canvas API

<img src="https://github.com/Usmanh25/bigfishlittlefish/blob/master/src/assets/Wireframe1.png"></img>

## Features

- Arrow keys control the player's movement
- Cursor controls the player's movement
- Player increases by 1 size when eating brown fish
- Player increases by 2 sizes when eating blue fish
- Player decreases by 1 size when eating yellow fish
- Gameplay music and "pop" sound effect when eating fish
- Gameplay music toggle button on top left of screen
- Main Menu - users can select "Play" option
- "You Win" Menu - users can select "Main Menu" option
- "You Lose" Menu - users can select "Main Menu" option

## Technical Implementations

One of the more satisfying implementations was the mouse-over implementation, which controls the player. By adding an event listener for 'mousemove' nested under the 'click' listener which begins gameplay, an algorithm is then added to the function 'mouseMove' in the player.js file, which keeps track of the cursor's (x, y) positioning on the screen relative to the canvas API, and correlates it to the player object.

```javascript
// src/index.js

    document.getElementById('play').addEventListener('click', (e) => {
        document.addEventListener('mousemove', player.mouseMove); 
    }
```

```javascript
// src/player.js

    mouseMove(event) {

        const canvasPosition = this.canvas.

        getBoundingClientRect();

        const mouse = {
            x: this.canvas.width/2,
            y: this.canvas.height/2
        }
        
        mouse.x = event.x - canvasPosition.left;
        mouse.y = event.y - canvasPosition.top;
    
        const dimensionX = this.x - mouse.x;
        const dimensionY = this.y - mouse.y;
    
        if (mouse.x != this.x) {
            this.x -= dimensionX;
        }
        if (mouse.y != this.y) {
            this.y -= dimensionY;
        }    
    }
```

<img src="https://github.com/Usmanh25/bigfishlittlefish/blob/master/src/assets/Wireframe2.png"></img>

## Future Features

- Adding touch functionality to control the player on touchscreen devices
- Score calculation