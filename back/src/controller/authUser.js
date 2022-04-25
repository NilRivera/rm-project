const passport = require('passport');
const jwt = require('jsonwebtoken');

const refreshTokens = [];

const loginUser = async (req, res, done) => {
  passport.authenticate('login', async (err, user) => {
    try {
      if (err || !user) {
        const error = new Error('An error occurred.');
        error.statusCode = 401;
        error.message = 'Wrong email or password';
        error.stack = '';
        return done(error);
      }

      return req.login(user, { session: false }, async (error) => {
        if (error) return done(error);

        // eslint-disable-next-line no-underscore-dangle
        const data = { _id: user._id, email: user.email };

        const token = jwt.sign({ user: data }, process.env.JWT_SECRET, {
          expiresIn: '15m',
        });
        const refreshToken = jwt.sign({ user: data }, process.env.JWT_SECRET);

        refreshTokens.push(refreshToken);

        return res.json({
          user,
          token,
          refreshToken,
        });
      });
    } catch (error) {
      return done(error);
    }
  })(req, res, done);
};

module.exports = {
  loginUser,
};
