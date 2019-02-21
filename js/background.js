function Background(game) {
    this.game = game
    this.img = new Image()
    this.randomBackground()
    this.x = 0
    this.y = 0
    this.dx = 5
}

Background.prototype.randomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

Background.prototype.randomBackground = function() {
    this.allBackgrounds = ['img/bg.png', 'img/bg2.png', 'img/bg.jpg', 'img/bg2.jpg', 'img/bg3.jpg', 'img/bg4.jpg']
    this.img.src = this.allBackgrounds[this.randomNumber(0, 5)]
}

Background.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height)
    this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height)
}

Background.prototype.move = function() {
    this.x -= this.dx
    this.x < -this.game.canvas.width ? this.x = 0 : null
}