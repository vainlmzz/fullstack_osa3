const http = require('http')

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    content: "Ada Lovelace",
    date: "39-44-5323523"
  },
  {
    id: 3,
    content: "Dan Abramov",
    date: "12-43-234345",
    important: true
  },
  {
    id: 4,
    content: "Mary Poppendick",
    date: "39-23-6423122",
    important: true
  }
]
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(persons))
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)