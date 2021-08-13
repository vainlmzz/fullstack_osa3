const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config()
const cors = require('cors')
const Person = require('./models/person')


app.use(cors())
app.use(express.static('build'))
morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))



app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
    error: 'add missing name/number' 
    })
}

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})


const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
       
 /* 


 app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
    error: 'add missing name/number' 
    })
}

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})


app.get('/info', (req, res) => {
    res.send(`<div><p>Phonebook has info for ${persons.length} people</p><p>${date = new Date()}</p></div>`)
  })

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})



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
    name: "Pekka Kuusi",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]



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

persons = persons.concat(person)

response.json(person)
})

*/
  
