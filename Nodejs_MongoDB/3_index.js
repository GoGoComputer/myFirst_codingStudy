// console.log("hello world")

// video https://www.youtube.com/watch?v=Tt_tKhhhJqY&t=29s



// npm 
// npm init -y
// npm install figlet
// npm install express


// npm uninstall figlet

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

// npm install -g nodemon

