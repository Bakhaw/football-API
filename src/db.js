import mongoose from 'mongoose';

export default callback => {
  let db = mongoose.connect('mongodb://localhost:27017/football-api-tah-les-fous');
  callback(db);
};
