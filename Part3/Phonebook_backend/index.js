const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const timestamp = new Date();
  const numberOfPeople = persons.length || 0;

  response.send(`
    <p>Phonebook has info for ${numberOfPeople} people</p>
    <p>${timestamp}</p>
    `);
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const personToShow = persons.find(person => person.id === id);
  if (personToShow) {
    response.json(personToShow)
  } else {
    console.log(`Person with ID:{${id}} does not exist`);
    response.status(404).end();
  }
})

app.post('/api/persons', (request, response) => {
  const person = request.body;
  persons.push(person);
  response.status(201).end();
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  persons = persons.filter(person => person.id !== id);
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})