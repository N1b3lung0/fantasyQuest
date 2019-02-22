var Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    playerIniHealth: 550,
    enemyIniHealth: 200,
    stopDie: true,
    startBattle: false,
    framesCounter: 0,
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
            if ((!this.startBattle)) {
                this.gameboard.draw()
                this.player.drawInMap()
                this.item.drawRoom1(this.player.mapX / 60, this.player.mapY / 60)
                this.itemFoundRoom1()
                this.enemyFound()
                this.endLevel()
            } else {
                if (this.startBattle) { framesCounter = 0 }
                this.battleSequence()
            }
        }.bind(this), 1000 / this.fps)
    },
    // Reset all game elements to start a new state
    reset: function() {
        this.gameboard = new GameBoard(this)
        this.background = new Background(this)
        this.images = Images
        this.images.loadImages()
        this.player = new Player(this, 100, 500, this.playerIniHealth, 110)
        this.enemy = new Enemy(this, 1740, 525, this.enemyIniHealth, 200)
        this.item = new Item(this)
    },
    // Clear screen each interval (60fps) to add movement to the canvas
    clear: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    // Function called on each interval to update the score
    drawScore: function() {
        this.player.update(this.ctx, this.player, this.playerIniHealth, this.w / 2 - this.playerIniHealth - 35, this.w / 2 - this.playerIniHealth - 20)
        this.enemy.update(this.ctx, this.enemy, this.enemyIniHealth, this.w / 2 + 5, (this.w / 2) + 20)
    },

    sequence: function(begin, end, actionPlayer, actionEnemy, width, height, animationPlayer) {
        this.fC = this.framesCounter
        if ((this.fC > begin) && (this.fC <= end)) {
            this.player.draw('silverKnight', actionPlayer, width, height, animationPlayer)
            this.enemy.draw('orc1', actionEnemy, 389, 394, 6)
            if (this.fC <= 300) {
                this.background.move()
                this.enemy.move(3.5)
            }
            if (this.fC > 400) {
                if ((this.fC !== 1) && (this.fC === end - 1) && (Math.trunc(end / 100) % 2)) {
                    this.enemy.receiveDamage(this.player.attack())
                }
                if ((this.fC === end - 1) && !(Math.trunc(end / 100) % 2)) {
                    this.player.receiveDamage(this.enemy.attack())
                }
            }
            if ((this.fC > 300) && (this.fC <= 400)) { this.player.move(-3.5) }
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
        if ((!(this.player.health > 0) || !(this.enemy.health > 0))) {
            if (this.player.health <= 0) { this.gameOver() } else {
                this.sequence(400, 1600, 'Idle', 'Die', 319, 385, 10)
                this.startBattle = false
                this.framesCounter = 0
                this.enemy.health = 200
                this.player.x = 100
                this.enemy.y = 525
                this.enemy.x = 1740
                this.player.y = 500
            }
        }
    },
    enemyFound: function() {
        this.enemy.enemiesArrayPositions.map((eachEnemy, idx) => {
            if ((eachEnemy[0] === Math.trunc(this.player.mapX / 60)) &&
                eachEnemy[1] === Math.trunc(this.player.mapY / 60)) {
                this.startBattle = true
                this.framesCounter = 0
                this.enemy.enemiesArrayPositions.splice(idx, 1)
            }
        })
    },
    itemFoundRoom1: function() {
        this.item.itemsRoom1.map((eachItem, idx) => {
            if ((eachItem[0] === Math.trunc(this.player.mapX / 60)) &&
                eachItem[1] === Math.trunc(this.player.mapY / 60)) {
                this.item.itemsRoom1.splice(idx, 1)
            }
        })
    },
    endLevel: function() {
        if ((Math.trunc(this.player.mapX / 60) - 1 === 20) && (Math.trunc(this.player.mapY / 60) === 0)) {
            this.stop()
            this.clear()
            endLevel.style.display = 'block'
        }
    },
    // Function called in case game is over
    stop: function() {
        clearInterval(this.interval)
    },
    // Game Over
    gameOver: function() {
        this.stop()
        this.clear()
        this.startBattle = false
        parent.style.display = 'block'
        game.style.display = 'none'
        gameOver.style.display = 'block'
    }
}