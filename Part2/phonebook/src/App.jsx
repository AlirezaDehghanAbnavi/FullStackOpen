import { useEffect, useState } from 'react'
import './style.css'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import CommunicationService from './services/CommunicationService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [searchedPerson, setSearchedPerson] = useState('');
  const [notification, setNotification] = useState(null);

  const addName = (event) => {
    event.preventDefault()

    if (!newName) {
      alert("Name cannot be empty");
      return;
    }

    if (!newNumber) {
      alert("Number cannot be empty");
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    const existingPerson = persons.find(p => p.name === newName);

    if (existingPerson) {
      if (existingPerson.number !== newNumber) {
        numberHandler(existingPerson.id, existingPerson)
      } else {
        alert(`${newName} is already added to phonebook`)
      }
      return
    }

    CommunicationService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })

    setNotification(
      `Added ${personObject.name}`
    )
    setTimeout(() => {
      setNotification(null)
    }, 5000)


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
    if (confirm(`Delete ${person}?`)) {
      CommunicationService.deleteFromDB(id)
        .then(() => {
          console.log("Delete request fullfilled")
          setPersons(persons.filter(p => p.id !== id))
        }).catch(error => alert(error))
    }
  }

  const numberHandler = (id, person) => {
    if (confirm(`${person.name} is already addded to phonebook, replace the old number with a new one?`)) {
      const updatedPerson = { ...person, number: newNumber };
      CommunicationService.updateNumber(id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(persons.map(p => p.id === id ? returnedPerson : p))
          setNewName('')
          setNewNumber('')
        }).catch(error => alert(error))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <Filter searchedPerson={searchedPerson} handleSearchChange={handleSearchChange} />
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