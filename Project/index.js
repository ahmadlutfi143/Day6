const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello Home!')
})

app.get('/beranda', function (req, res) {
  res.send('Hello Beranda!')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})