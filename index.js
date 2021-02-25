const express = require('express')
const bodyParser = require('body-parser')
const { WebhookClient } = require('dialogflow-fulfillment')
const { response } = require('express')

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;


app.get('', (request, response) => {
    console.log("Welcome")
    response.send("Hello world!")
})

app.post('/dialogflow-fulfillment', (request, response) => {
    dialogflowFulfillment(request, response)
})


app.listen(PORT, () => {
    console.log(`Listening on post  ${PORT}`)
})

const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({ request, response })

    function sayHello(agent) {
        agent.add("Testing hello workd 123")
    }

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", sayHello)
    agent.handleRequest(intentMap)
}
