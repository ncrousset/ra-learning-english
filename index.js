const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = process.env.POST || 3000


app.post('/dialogflow-fulfillment', (request, response) => {
    console.log("test")
})

app.listen(port, () => {
    console.log("Listening on post" + port)
})