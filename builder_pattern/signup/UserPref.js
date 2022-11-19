class UserPref {
    constructor (newUser, nickname, favoriteTopics, isSME, isModerator, isAdmin) {
        this.user = newUser;
        this.nickname = nickname;
        this.favoriteTopics = favoriteTopics;
        this.isSME = isSME;
        this.isModerator = isModerator;
        this.isAdmin = isAdmin;
    }
}

module.exports = UserPref;