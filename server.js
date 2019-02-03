const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(__dirname+'/index-express.html'))
app.use(express.static('src'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))