const { Router } = require('express');
const { getCharacters, updateCharacter } = require('../controller/characters');

const charactersRouter = new Router();

charactersRouter.route('/characters').get(getCharacters);
charactersRouter.route('/:characterId').put(updateCharacter);

module.exports = charactersRouter;
