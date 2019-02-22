var parent, canvas, body, endLevel



window.onload = function() {
    parent = document.getElementById('game-board')
    canvas = document.createElement('canvas')
    body = document.getElementsByTagName("body")[0]
    canvas.setAttribute('id', 'canvas')
    body.appendChild(canvas)
    endLevel = document.getElementById('game-end-level')
    endLevel.style.display = 'none'
    document.getElementById("start-button").onclick = function() {
        parent.style.display = 'none'
        Game.init('canvas')
    }
}