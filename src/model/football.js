import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let FootballSchema = new Schema({
  name: String,
  team: String,
  age: Number,
  pos: String
});

module.exports = mongoose.model('Football', FootballSchema);
