function Item(game) {
    this.game = game
    this.room1ArrayPositions = [
        [3, 6],
        [4, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [4, 8],
        [5, 4],
        [5, 5],
        [5, 6],
        [5, 7],
        [5, 8]
    ]
    this.itemsRoom1 = [
        [4, 4],
        [5, 4],
        [4, 8],
        [5, 8]
    ]
    this.room2ArrayPositions = [
        [15, 3],
        [13, 4],
        [14, 4],
        [15, 4],
        [16, 4],
        [13, 5],
        [14, 5],
        [15, 5],
        [16, 5],
        [14, 6],
    ]
    this.itemsRoom2 = [
        [13, 4],
        [14, 4],
        [16, 4],
        [16, 5]
    ]
    this.img = new Image()
    this.img.src = 'img/coin.png'
}

Item.prototype.drawRoom1 = function(posX, posY) {
    this.room1ArrayPositions.forEach(element => {
        if ((element[0] === posX) && (element[1] === posY)) {
            this.itemsRoom1.forEach(element => {
                this.game.ctx.drawImage(this.img, element[0] * 60, element[1] * 60, 60, 49)
            })
        }
    });
}