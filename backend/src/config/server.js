const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const queryParser = require('express-query-int')

app.use(cors())
app.use(queryParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('BACKEND is running on port ' + port)
})

module.exports = app