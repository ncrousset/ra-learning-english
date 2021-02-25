const express = require('express')
const bodyParser = require('body-parser')
const { WebhookClient } = require('dialogflow-fulfillment')
const { response } = require('express')

const app = express()
app.use(bodyParser.json())
const port = process.env.POST || 3000


app.post('/dialogflow-fulfillment', (request, response) => {
    dialogflowFulfillment(request, response)
})

app.listen(port, () => {
    console.log("Listening on post" + port)
})

const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({ request, response })

    function sayHello(agent) {
        agent.add("Hi there, this response is coming from heroku")
    }

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", sayHello)
    agent.handleRequest(intentMap)
}