const SignupBuilder = require('./SignupBuilder.js');

// Signup.create('John Doe', 'john@email.com', 25, 'johndoe.jpg', 'John_D', ['Javascript', 'Node.js'],
// ['Node.js'], true, false);

new SignupBuilder('John Doe', 'john@email.com', 25)
    .setPhoto('johndoe.jpg')
    .setNick('John_D')
    .setTopics(['Node.js', 'JavaScript'])
    .setSME(['Node.js'])
    .setModerator()
    .setAdmin()
    .create()