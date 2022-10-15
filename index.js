const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    $.getJSON("balls.json", function(json) {
        res.send(json);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})