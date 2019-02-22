var parent, canvas, body, endLevel, gameOver, game



window.onload = function() {
    parent = document.getElementById('game-board')
    gameOver = document.getElementById('game-over')
    game = document.getElementById('game')
    canvas = document.createElement('canvas')
    body = document.getElementsByTagName("body")[0]
    canvas.setAttribute('id', 'canvas')
    body.appendChild(canvas)
    endLevel = document.getElementById('game-end-level')
    endLevel.style.display = 'none'
    gameOver.style.display = 'none'
    document.getElementById("start-button").onclick = function() {
        parent.style.display = 'none'
        Game.init('canvas')
    }
}