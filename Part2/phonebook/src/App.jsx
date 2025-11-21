import { use, useState } from 'react'
import './style.css'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [searchedPerson, setSearchedPerson] = useState('');
  
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

  const handleSearchChange = (event) => {
    setSearchedPerson(event.target.value)
  }

  const personToShow = persons.filter(p => p.name.toLowerCase().includes(searchedPerson.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input type="text" value={searchedPerson} onChange={handleSearchChange}/>
        </div>
      <h2>add a new</h2>
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
      <Person persons={personToShow}/>      
    </div>
  )
}

export default App