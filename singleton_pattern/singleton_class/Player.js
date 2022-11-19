const Scores = require('./Scoreboard');
// const Scores = new ScoreBoard();

// Player class는 생성자로 이름(name)을 전달받고,
// 이 데이터를 class내부 멤버변수로 저장한다.
// Player class를 외부에서 선언할 수 있도록
// class를 export한다.
class Player {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    wins(points) {
        Scores.update(this.name, points);
    }
    loses(points) {
        Scores.update(this.name, -points);
    }
}

module.exports = Player;