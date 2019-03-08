const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const secret = process.env.SECRET; 

app.get('/', (req, res) => res.send(`This is you SECRET -> ${secret}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))