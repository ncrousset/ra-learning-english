const express = require('express')
const bodyParser = require('body-parser')
const { WebhookClient } = require('dialogflow-fulfillment')
const { response } = require('express')
// const {conversation} = require('conversation')

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3030;


app.get('', (request, response) => {
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
        agent.add("Yes")
    }

    function sayLessonOne(agent) {
        agent.add("Test Lesson one")
    }

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", sayHello)
    intentMap.set("Lesson one", sayLessonOne)
    agent.handleRequest(intentMap)
}
