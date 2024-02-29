const mongoose = require('mongoose');

const { Schema } = mongoose;

const FavoritesSchema = new Schema({
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pet'
    }
  ]
});

const Favorite = mongoose.model('Favorite', FavoritesSchema);

module.exports = Favorite;
