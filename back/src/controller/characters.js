const fetch = require('node-fetch');

const Character = require('../models/character');

const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    if (!Object.keys(characters).length) {
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then(async (data) => {
          const charactersApi = await Character.create(data.results);
          res.status(200);
          res.send(charactersApi);
        });
      return;
    }
    res.send(characters);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const updateCharacter = async (req, res) => {
  const { characterId } = req.params;
  const { body } = req;
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      characterId,
      body,
      {
        new: true,
      },
    );
    res.status(200);
    res.send(updatedCharacter);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  getCharacters,
  updateCharacter,
};
