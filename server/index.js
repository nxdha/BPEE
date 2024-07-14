const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const app = express();
const url = 'mongodb+srv://admin:admin@cluster0.khl9ree.mongodb.net/';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});
mongoose.connection.once('open', () => {
  console.log('connected');
});

//middlewares
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

const userRouter = require('./routes/users');
app.use('/auth', userRouter);

app.listen('3001', () => {});
