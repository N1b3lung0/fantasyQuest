var Images = {
    silverKnightAttack1: [],
    silverKnightAttack2: [],
    silverKnightDeadBackward: [],
    silverKnightDeadFront: [],
    silverKnightIdle: [],
    silverKnightJump: [],
    silverKnightRun: [],
    silverKnightSummon: [],
    silverKnightWalk: [],
    orc1Attack: [],
    orc1Die: [],
    orc1Hurt: [],
    orc1Idle: [],
    orc1Jump: [],
    orc1Run: [],
    orc1Walk: [],
    UI: [],
    gameBoard: [],

    loadImages: function() {
        for (let i = 0; i <= 9; i++) {
            this.img = new Image()
            this.img.src = 'img/SilverKnight/Attack1/' + i + '.png'
            this.silverKnightAttack1.push(this.img)
            this.img = new Image()
            this.img.src = 'img/SilverKnight/Attack2/' + i + '.png'
            this.silverKnightAttack2.push(this.img)
            this.img = new Image()
            this.img.src = 'img/SilverKnight/Jump/' + i + '.png'
            this.silverKnightJump.push(this.img)
            this.img = new Image()
            this.img.src = 'img/SilverKnight/Run/' + i + '.png'
            this.silverKnightRun.push(this.img)
            this.img = new Image()
            this.img.src = 'img/SilverKnight/Walk/' + i + '.png'
            this.silverKnightWalk.push(this.img)
        }
        for (let i = 0; i <= 8; i++) {
            this.img = new Image()
            this.img.src = 'img/SilverKnight/DeadBackward/' + i + '.png'
            this.silverKnightDeadBackward.push(this.img)
            this.img = new Image()
            this.img.src = 'img/SilverKnight/DeadFront/' + i + '.png'
            this.silverKnightDeadFront.push(this.img)
            this.img = new Image()
            this.img.src = 'img/SilverKnight/Summon/' + i + '.png'
            this.silverKnightSummon.push(this.img)
        }
        for (let i = 0; i <= 10; i++) {
            this.img = new Image()
            this.img.src = 'img/SilverKnight/Idle/' + i + '.png'
            this.silverKnightIdle.push(this.img)
        }
        for (let i = 0; i <= 6; i++) {
            this.img = new Image()
            this.img.src = 'img/Orc1/Attack/' + i + '.png'
            this.orc1Attack.push(this.img)
            this.img = new Image()
            this.img.src = 'img/Orc1/Die/' + i + '.png'
            this.orc1Die.push(this.img)
            this.img = new Image()
            this.img.src = 'img/Orc1/Hurt/' + i + '.png'
            this.orc1Hurt.push(this.img)
            this.img = new Image()
            this.img.src = 'img/Orc1/Idle/' + i + '.png'
            this.orc1Idle.push(this.img)
            this.img = new Image()
            this.img.src = 'img/Orc1/Jump/' + i + '.png'
            this.orc1Jump.push(this.img)
            this.img = new Image()
            this.img.src = 'img/Orc1/Run/' + i + '.png'
            this.orc1Run.push(this.img)
            this.img = new Image()
            this.img.src = 'img/orc1/Walk/' + i + '.png'
            this.orc1Walk.push(this.img)
        }
        this.img = new Image()
        this.img.src = 'img/UI/UI_FULLBAR.png'
        this.UI.push(this.img)
        this.img = new Image()
        this.img.src = 'img/UI/UI_COLORBAR(3).png'
        this.UI.push(this.img)
        this.img = new Image()
        this.img.src = 'img/UI/UI_BARMARKINGS.png'
        this.UI.push(this.img)
        this.img = new Image()
        this.img.src = 'img/UI/UI_COLORBAR(2).png'
        this.UI.push(this.img)
        this.img = new Image()
        this.img.src = 'img/UI/UI_COLORBAR(4).png'
        this.UI.push(this.img)
        this.img = new Image()
        this.img.src = 'img/UI/UI_ETCBAR(2).png'
        this.UI.push(this.img)
    }
}