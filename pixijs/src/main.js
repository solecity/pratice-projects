
console.log("STARTED")

let app;
let player;
let keys = {};

window.onload = function () {
    app = new PIXI.Application({ backgroundColor: 333, height: 450, width: 650 });
    document.body.appendChild(app.view);

    player = PIXI.Sprite.from('../assets/hero.png');
    app.stage.addChild(player);

    window.addEventListener('keydown', keysDown)
    window.addEventListener('keyup', keysUp)

    app.ticker.add(gameLoop)
}

const keysDown = (e) => {
    keys[e.keyCode] = true
}

const keyUp = (e) => {
    keys[e.keyCode] = false
}

const gameLoop = () => {
    if (event.key === 'ArrowRight' && player.x < 650) {
        player.x += 5
    } else if (event.key === 'ArrowLeft' && player.x > 0) {
        player.x -= 5
    } else if (event.key === 'ArrowDown' && player.y < 450) {
        player.y += 5
    } else if (event.key === 'ArrowUp' && player.y > 0) {
        player.y -= 5
    }
}