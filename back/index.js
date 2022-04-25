require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/mongoose');
require('./src/config/passport')(server);

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const authRouter = require('./src/routes/login');
const charactersRouter = require('./src/routes/characters');

server.use('/api', authRouter);
server.use('/api/character', charactersRouter);

server.listen(port, () =>
  debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`),
);
