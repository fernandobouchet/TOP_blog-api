require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const connectDB = require('./database/db');

const port = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/admin', require('./routes/adminRoute'));
app.use('/post', require('./routes/postRoute'));
app.use('/message', require('./routes/messageRoute'));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
