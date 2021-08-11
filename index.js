const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Pekka",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    res.send(`<div><p>Phonebook has info for ${persons.length} people</p><p>${date = new Date()}</p></div>`)
  })

app.get('/api/persons/:id', (request, response) => {
const id = Number(request.params.id)
const person = persons.find(person => person.id === id)
if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})




       
    
app.post('/api/persons', (request, response) => {
const body = request.body


if (!body.name || !body.number) {
    return response.status(400).json({ 
    error: 'add missing name/number' 
    })
}


if (persons.map(person => person.name).includes(body.name)) {
    return response.status(409).json({ 
        error: 'name must be unique' 
    })
    }



const person = {
    id: Math.floor(Math.random() * 100),
    name: body.name,
    number: body.number
}
console.log(body)
persons = persons.concat(person)

response.json(person)
})
  
const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})