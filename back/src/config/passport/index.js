const passport = require('passport');

require('./localStrat');
require('./tokenStrat');

function passportConfig(server) {
  server.use(passport.initialize());
}

module.exports = passportConfig;
