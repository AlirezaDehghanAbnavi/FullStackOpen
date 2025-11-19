import { use, useState } from 'react'

const Person = (props) => {
  return <li>{props.name} {props.number}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '040-1234567' , id: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {
    if (persons.some(p => p.name == newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(newName)
    } 
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {newName} {newNumber}</div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map((person)=> (
          <Person key={person.id} name={person.name} number={person.number}/>
      ))}
        </ul>
    </div>
  )
}

export default App