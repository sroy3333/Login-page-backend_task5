const User = require('../models/users');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password matches
        if (password === user.password) {
            return res.status(200).json({ message: 'User login successful' });
        } else {
            return res.status(401).json({ message: 'User not authorized' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    login
};