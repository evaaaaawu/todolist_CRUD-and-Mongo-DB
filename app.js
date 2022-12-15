// require packages used in the project
const express = require('express')  //載入express
const app = express()
const port = 3000

// routes setting
app.get('/', (req, res) => {
  res.send('Hello World!!')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})