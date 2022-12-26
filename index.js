const express = require('express')
const app = express()
const port = 3003
const fs = require('fs')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.send('Hello World!')
})
app.post('/', (req, res) => {
    fs.readFile('index.js', 'utf8', (err, data) => {
        return res.send(data)
    })
})

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})