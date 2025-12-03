const PersonForm = ({addName, newName, newNumber, handleNameChange, handleNumberChange}) => (
        <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

export default PersonForm