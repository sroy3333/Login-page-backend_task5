const path = require('path');
const express = require('express');
const sequelize = require('./util/database');
const userRoutes = require('./routes/user');
const User = require('./models/users');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);


app.use(express.static(path.join(__dirname, 'public')))

app.get('/login/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.get('/signup/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
