const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../../models/user');

passport.use(
  'login',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, next) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return next(null, false, { message: 'User not found' });
        }
        if (!user.isValidPassword(password)) {
          return next(null, false, { message: 'Wrong password' });
        }
        return next(null, user, { message: 'Logged in successfully' });
      } catch (error) {
        return next(null, false);
      }
    },
  ),
);
