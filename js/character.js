function Character(game, xArg, yArg, healthArg, strengthArg) {
    this.game = game
    this.name = name
    this.health = healthArg
    this.strength = strengthArg
    this.img = new Image()
    this.img.frameIndex = 0
    this.x = xArg
    this.y = yArg
}

Character.prototype.attack = function() { return this.strength }
Character.prototype.receiveDamage = function(damage) {
    if (this.health > damage) { this.health -= damage } else { this.health = 0 }
    return this.health
}

Character.prototype.draw = function(name, action, width, height, animation) {
    if (this.game.framesCounter % animation === 0) {
        this.img.frameIndex += 1
        if (this.img.frameIndex > animation) this.img.frameIndex = 0
    }
    console.log(this.x + ' : ' + this.y)
    this.game.ctx.drawImage(Images[`${name}${action}`][this.img.frameIndex], this.x, this.y, width / 2, height / 2)
}

Character.prototype.move = function(dx) { this.x -= dx }

Character.prototype.update = function(ctx, character, iniHealth, posHX, legend) {
    let posHY = 100,
        posSY = 150
    ctx.font = '14px sans-serif'
    this.game.ctx.drawImage(Images.UI[0], posHX - 4, posHY - 4, iniHealth + 8, 30)
    this.game.ctx.drawImage(Images.UI[1], posHX, posHY, iniHealth, 20)
    this.game.ctx.drawImage(Images.UI[2], posHX, posHY, iniHealth, 20)
    this.game.ctx.drawImage(Images.UI[3], posHX, posHY, character.health, 20)
    this.game.ctx.drawImage(Images.UI[0], posHX - 4, posSY - 18, iniHealth + 8, 30)
    this.game.ctx.drawImage(Images.UI[4], posHX, posSY - 14, iniHealth, 20)
    ctx.fillStyle = 'white'
    ctx.fillText('health      ' + character.health + ' / ' + iniHealth, legend, posHY + 14)
    ctx.fillText('strength   ' + character.strength, legend, posSY)
}

function Player(name, x, y, health, strength) {
    Character.call(this, name, x, y, health, strength)
    this.mapX = 120
    this.mapY = window.innerHeight - 60 + 15
    this.setListeners()
}
Player.prototype = Object.create(Character.prototype)
Player.prototype.constructor = Player

Player.prototype.setListeners = function() {
    document.onkeydown = function(event) {
        this.newY = Math.trunc(this.mapY / 60)
        this.newX = Math.trunc(this.mapX / 60)
        this.newPosition
        if (event.keyCode === this.game.keys.TOP_KEY &&
            this.game.gameboard.matrix[this.newY - 1][this.newX] === 0) { this.mapY -= 60 } else
        if (event.keyCode === this.game.keys.DOWN_KEY &&
            this.game.gameboard.matrix[this.newY + 1][this.newX] === 0) { this.mapY += 60 } else
        if (event.keyCode === this.game.keys.LEFT_KEY &&
            this.game.gameboard.matrix[this.newY][this.newX - 1] === 0) { this.mapX -= 60 } else
        if (event.keyCode === this.game.keys.RIGHT_KEY &&
            this.game.gameboard.matrix[this.newY][this.newX + 1] === 0) { this.mapX += 60 }
    }.bind(this)
}

Player.prototype.drawInMap = function() {
    if (this.game.framesCounter % 9 === 0) {
        this.img.frameIndex += 1
        if (this.img.frameIndex > 9) this.img.frameIndex = 0
    }
    this.game.ctx.drawImage(Images['silverKnightWalk'][this.img.frameIndex], this.mapX + 5, this.mapY - 5, 50, 50)
}

function Enemy(name, x, y, health, strength) {
    Character.call(this, name, x, y, health, strength)
    this.enemiesArrayPositions = [
        [4, 4],
        [5, 4],
        [13, 4],
        [14, 4]
    ]
}

Enemy.prototype = Object.create(Character.prototype)
Enemy.prototype.constructor = Enemy