const express = require('express')
const { PORT } = require('./config/config');

const cors = require('cors');
const app = express();


const {register, login} = require('./services/authService');

const authenticated = require('./middlewares/auth')
const isAuth = require('./middlewares/isAuth')

const jwt = require('jsonwebtoken');
const {SECRET, COOKIE_NAME} = require('./config/config');
const cookieParser = require('cookie-parser');



app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(authenticated())
app.use(cors());


app.post('/register', (req, res) => {
  register(req.body)
      .then(token => {
          res.cookie(COOKIE_NAME, token, {httpOnly: true});

          jwt.verify(token, SECRET, (err, decoded) => {
              if (err) {
                  res.clearCookie(COOKIE_NAME);
              } else {
                  res.status(200).json(decoded)
              }
          })

      }).catch((error) => res.json(error))
});


app.post('/login', (req, res) => {
  const {username, password} = req.body;
  login(username, password)
      .then(token => {
          res.cookie(COOKIE_NAME, token, {httpOnly: true});

          jwt.verify(token, SECRET, (err, decoded) => {
              if (err) {
                  res.clearCookie(COOKIE_NAME);
              } else {
                  res.status(200).json(decoded)
              }
          })

      }).catch((error) => res.json(error))
});



app.get('/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME)
  res.status(200).json({message: 'successfully'})
});


require('./config/mongoose');

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});









app.get('/getUser', isAuth, (req, res) => {
  const user = req.user

  if (user) {
      res.json(user)
  } else {
      res.json({message: 'No user found'})
  }
})





