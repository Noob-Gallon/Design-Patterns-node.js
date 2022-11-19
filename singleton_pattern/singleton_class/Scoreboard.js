class Scoreboard {
    constructor() {
        this.board = [];
    }
    // let a player join this game.
    join(name) {
        this.board.push({
            name,
            points: 0
        });
    }
    // let a player leave this game.
    // player의 name이 name이 전달된 parameter의 이름이면
    // filter를 통해 board에서 제거한다.
    leave(name) {
        this.board = this.board.filter(player => player.name !== name);
    }
    // find a player who named as parameter 'name' and give him points as delivered on the parameter.
    update(name, points) {
        const player = this.board.findIndex(player => player.name === name);
        if (player > -1) {
            this.board[player].points += points;
        }
    }
    getBoard() {
        return this.board;
    }
    // sort in descending order
    sort() {
        return this.board.sort((x, y) => y.points - x.points);
    }
}

// to acheive singleton, we have to export as an class instance
// CommonJS foramt으로 singleton으로 사용할 class의 instance를 export한다.
module.exports = new Scoreboard();
