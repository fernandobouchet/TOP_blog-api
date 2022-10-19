const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.log(error);
  });

  db.once('connected', () => {
    console.log('Database Connected');
  });
};

module.exports = connectDB;
