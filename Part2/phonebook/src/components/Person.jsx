const Person = ({ persons, deleteHandler }) => (
        <ul>
            {persons.map(person => (
                <li key={person.id}> {person.name} {person.number}
                <button onClick={()=>{deleteHandler(person.id, person.name)}}>delete</button>
                </li>
            ))}
        </ul>
        
    )

export default Person