const {User } = require('../utils/index');

module.exports = async function generateUsername(name) {
    let baseUsername = name.toLowerCase().replace(/\s+/g, '');
    let username = baseUsername;
    let count = 1;

    let userExists = await User.findOne({ where: { username } });

    while (userExists) {
        username = `${baseUsername}${count < 10 ? '0' : ''}${count}`;
        userExists = await User.findOne({ where: { username } });
        count++;
    }

    return username;
};