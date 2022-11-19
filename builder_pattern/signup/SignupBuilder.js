const Signup = require('./Signup.js')

class SignupBuilder {

    // we first demand the most basic set of options to create a user:
    // namely, the person's name, email address, and age;
    constructor (name, email, age) {

        // instance variables
        this.name = name;
        this.email = email;
        this.age = age;
    }
    setNick(name) {
        this.nickName = name;
        return this;
    }
    setPhoto(photo) {
        this.photo = photo;
        return this;
    }
    setTopics(topics) {
        this.favoriteTopics = topics;
        return this;
    }
    setSME(topics) {
        this.isSME = topics;
        return this;
    }
    setModerator() {
        this.isModerator = true;
        return this;
    }
    setAdmin() {
        this.isAdmin = true;
        return this;
    }
    create() {
        return Signup.create(this);
    }
}

module.exports = SignupBuilder;