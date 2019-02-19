window.onload = function() {
    var parent = document.getElementById('game-board')
    var canvas = document.createElement('canvas')
    canvas.setAttribute('id', 'canvas')
    parent.appendChild(canvas)
    Game.init('canvas')
}