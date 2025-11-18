import { useState } from 'react'

const Name = ({name}) => {
  return <li>{name}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    if (persons.some(p => p.name == newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: String(newName)
    } 
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map((name)=> (
          <Name key={name.id} name={name.name}/>
      ))}
        </ul>
    </div>
  )
}

export default App