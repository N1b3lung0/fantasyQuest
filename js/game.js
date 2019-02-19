var Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    playerIniHealth: 550,
    enemyIniHealth: 440,
    keys: {
        TOP_KEY: 38,
        DOWN_KEY: 40,
        LEFT_KEY: 37,
        RIGHT_KEY: 39,
        SPACE: 32
    },
    init: function(id) {
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext('2d')
        this.w = window.innerWidth
        this.h = window.innerHeight
        this.canvas.width = this.w
        this.canvas.height = this.h
        this.start()
    },
    start: function() {
        this.reset()
        this.interval = setInterval(function() {
            this.clear();
            this.framesCounter++;
            this.framesCounter > 1500 ? this.stop() : null

            this.battleSequence()
        }.bind(this), 1000 / this.fps)
    },
    // Reset all game elements to start a new state
    reset: function() {
        this.background = new Background(this)
        this.player = new Player(this, this.w * 0.10, this.h * 0.59, 120, 100, this.playerIniHealth, 110)
        this.enemy = new Enemy(this, this.w * 1.65, this.h * 0.61, 120, 100, this.enemyIniHealth, 50)
        this.framesCounter = 0
    },
    // Clear screen each interval (60fps) to add movement to the canvas
    clear: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    // Function called on each interval to update the score
    drawScore: function() {
        this.player.update(this.ctx, this.player.health, this.playerIniHealth, this.w / 2 - this.playerIniHealth - 35, this.player.strength, this.w / 2 - this.playerIniHealth - 20)
        this.enemy.update(this.ctx, this.enemy.health, this.enemyIniHealth, this.w / 2 + 5, this.enemy.strength, (this.w / 2) + 20)
    },

    sequence: function(begin, end, actionPlayer, actionEnemy, width, height, animationPlayer, animationEnemy) {
        if ((this.framesCounter > begin) && (this.framesCounter <= end)) {
            this.player.draw('SilverKnight', actionPlayer, width, height, animationPlayer)
            this.enemy.draw('Orc1', actionEnemy, 389, 394, 6)
            if (this.framesCounter <= 300) {
                this.background.move()
                this.enemy.move(5.5)
            }
            if (this.framesCounter > 400) {
                if ((this.framesCounter !== 1) && (this.framesCounter === end - 1) && (Math.trunc(end / 100) % 2)) {
                    this.enemy.receiveDamage(this.player.attack())
                }
                if ((this.framesCounter === end - 1) && !(Math.trunc(end / 100) % 2)) {
                    this.player.receiveDamage(this.enemy.attack())
                }
            }

            if ((this.framesCounter > 300) && (this.framesCounter <= 400)) {
                this.player.move(-3.5)
            }
        }
    },

    battleSequence: function() {
        this.background.draw()
        this.sequence(0, 300, 'Walk', 'Walk', 389, 394, 9)
        this.sequence(300, 400, 'Walk', 'Idle', 389, 394, 9)
        if ((this.player.health > 0) && (this.enemy.health > 0)) {
            this.sequence(400, 500, 'Attack1', 'Hurt', 422, 507, 9)
            this.sequence(500, 600, 'Summon', 'Attack', 417, 479, 8)
            this.sequence(600, 700, 'Attack1', 'Hurt', 422, 507, 8)
            this.sequence(700, 800, 'Summon', 'Attack', 417, 479, 8)
            this.sequence(800, 900, 'Attack1', 'Hurt', 422, 507, 8)
            this.sequence(900, 1000, 'Summon', 'Attack', 417, 479, 8)
            this.sequence(1000, 1100, 'Attack1', 'Hurt', 422, 507, 8)
            this.sequence(1100, 1200, 'Summon', 'Attack', 417, 479, 8)
            this.sequence(1200, 1300, 'Attack1', 'Hurt', 422, 507, 8)
            this.sequence(1300, 1400, 'Summon', 'Attack', 417, 479, 8)
            this.sequence(1400, 1500, 'Attack1', 'Hurt', 422, 507, 8)
            this.sequence(1500, 1600, 'Summon', 'Attack', 417, 479, 8)
        }
        this.drawScore()
        if (!(this.player.health > 0) || !(this.enemy.health > 0)) {
            this.sequence(400, this.framesCounter, 'Idle', 'Die', 319, 385, 10)
        }
    },
    // Function called in case game is over
    stop: function() {
        clearInterval(this.interval)
    },
    // Game Over
    gameOver: function() {
        this.stop()
    }
}