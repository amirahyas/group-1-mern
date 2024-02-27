const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
   
  addFavorites: [
    {
      type: Schema.Types.ObjectId,
      trim:true,
      ref: 'User',
    },
  ],
});

const Pet = model('Pet', petSchema);

module.exports = Pet;
