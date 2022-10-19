require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
