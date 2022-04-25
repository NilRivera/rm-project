const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  id: Number,
  name: String,
  authorImage: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: Object,
  location: Object,
  image: String,
  episode: Array,
  url: String,
  created: String,
  isFavorite: Boolean,
});

module.exports = model('Character', characterSchema);
