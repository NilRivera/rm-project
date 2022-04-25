const { Router } = require('express');
const { loginUser } = require('../controller/authUser');

const authRouter = new Router();

authRouter.route('/login').post(loginUser);

module.exports = authRouter;
