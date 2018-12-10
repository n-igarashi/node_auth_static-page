const express = require("express")
const auth = require('./auth');
const app = express();

app.listen( process.env.PORT || 3000 , () => {
  console.log('server online')
});

app.use(auth);

app.use(express.static('dist'));