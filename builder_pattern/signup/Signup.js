const User = require('./User.js');
const UserPref = require('./UserPref.js');

class Singup {

    // 이 방법을 통해 전달된 object에 argument를 분리해 낼 수 있음?
    async create({name, email, age, photo, nickname, favoriteTopics, isSME, isModerator, isAdmin}) {

        // both User and UserPref class return a promise which simulates a realistic scenario here for us.
        // So, the create method in the Signup class is the interface that allows the end consumer of this product
        // to create a new user.
        const newUser = await new User(name, email, age, photo);
        await new UserPref(newUser, nickname, favoriteTopics, isSME, isModerator, isAdmin);
    }
}

// exporting this class as a singleton
module.exports = new Singup();