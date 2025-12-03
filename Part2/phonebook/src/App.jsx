import { useEffect, useState } from 'react'
import './style.css'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import CommunicationService from './services/CommunicationService'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [searchedPerson, setSearchedPerson] = useState('');
  
  const addName = (event) => {
    event.preventDefault()

    if (persons.some(p => p.name == newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length+1)
    } 
    
    CommunicationService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
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

  useEffect(() => {
    CommunicationService.getAll()
                        .then(initialPhoneBook => {
                          console.log("Promise fullfilled")
                          setPersons(initialPhoneBook)
                        })
  }, [])

  const deleteHandler = (id, person) => {
    if(confirm(`Delete ${person}?`)){
      CommunicationService.deleteFromDB(id)
                          .then(() => {
                          console.log("Delete request fullfilled")
                          setPersons(persons.filter(p=>p.id !== id))
                        }).catch(error => alert(error))}
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter searchedPerson={searchedPerson} handleSearchChange={handleSearchChange}/>
      <h2>add a new</h2>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Person persons={personToShow} deleteHandler={deleteHandler} />      
    </div>
  )
}

export default App