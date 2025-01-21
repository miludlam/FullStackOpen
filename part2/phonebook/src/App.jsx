import { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-1234567' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [personFilter, setPersonFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = { name: newName, number: newNumber }

        const matches = persons.filter((person) => person.name === newName)

        if (matches.length === 0) {
            setPersons(persons.concat(personObject))
        } else {
            alert(newName + ' is already in phonebook')
        }
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleNameFilter = (event) => {
        setPersonFilter(event.target.value)
    }

    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(personFilter.toLowerCase())
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input value={personFilter} onChange={handleNameFilter} />
            </div>
            <h3>Add a new</h3>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h3>Numbers</h3>
            <div>
                {filteredPersons.map(person =>
                    <Person key={person.name} person={person} />
                )}
            </div>
        </div>
    )
}

export default App