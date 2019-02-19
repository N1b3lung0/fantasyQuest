function Character(game, xArg, yArg, wArg, hArg, healthArg, strengthArg) {
    this.game = game
    this.name = name
    this.health = healthArg
    this.strength = strengthArg
    this.img = new Image()
    this.img.frameIndex = 0
    this.x = xArg
    this.y = yArg
    this.w = wArg
    this.h = hArg
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
    this.img.src = 'img/' + name + '/' + action + '/' + this.img.frameIndex + '.png'
    this.game.ctx.drawImage(this.img, this.x, this.y, width / 2, height / 2)
}

Character.prototype.move = function(dx) {
    this.x -= dx
}

Character.prototype.healthBar = function(ctx, color1, color2) {
    let gradient = ctx.createLinearGradient(250, 150, 50, 250)
    gradient.addColorStop(1, color1)
    gradient.addColorStop(0, color2)
    ctx.fillStyle = gradient
}

Character.prototype.lineHealth = function(ctx, width, posHX, posHY, health, color) {
    ctx.beginPath();
    ctx.lineWidth = width
    ctx.lineCap = "round"
    ctx.moveTo(posHX, posHY)
    ctx.lineTo(posHX + health, posHY)
    ctx.strokeStyle = color
    ctx.stroke()
}

Character.prototype.update = function(ctx, health, iniHealth, posHX, strength, legend) {
    let posHY = 100,
        posSY = 140
    ctx.font = '14px sans-serif'
    this.lineHealth(ctx, 22, posHX, posHY, iniHealth, '#FFC300')
    this.lineHealth(ctx, 20, posHX, posHY, iniHealth, 'rgba(226, 74, 41, 0.9)')
    this.lineHealth(ctx, 20, posHX, posHY, health, '#DE9F0E')
    console.log(iniHealth)
    console.log(health)

    ctx.fillStyle = 'rgba(226, 74, 41, 0.8)'
    ctx.fillStyle = 'white'
    ctx.fillText('health      ' + health + ' / ' + iniHealth, legend, posHY + 5)
    ctx.fillText('strength   ' + strength, legend, posSY)
}

function Player(name, x, y, w, h, health, strength) {
    Character.call(this, name, x, y, w, h, health, strength)
}

Player.prototype = Object.create(Character.prototype)

Player.prototype.constructor = Player

function Enemy(name, x, y, w, h, health, strength) {
    Character.call(this, name, x, y, w, h, health, strength)
}

Enemy.prototype = Object.create(Character.prototype)
Enemy.prototype.constructor = Enemy

function Battle() {
    this.player = []
    this.enemy = []
}

Battle.prototype.addPlayer = function(Player) { this.player.push(Player) }
Battle.prototype.addEnemy = function(Enemy) { this.enemy.push(Enemy) }
Battle.prototype.playerAttack = function() {
    this.enemy[0]
}
Battle.prototype.enemyAttack = function() {}