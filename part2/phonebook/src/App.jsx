import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'

const Filter = ({ personFilter, handleNameFilter }) => {
    return (
        <div>
            filter shown with <input value={personFilter} onChange={handleNameFilter} />
        </div>
    )
}

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
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
    )
}

const Persons = ({filteredPersons}) => {
    return (
        <div>
            {filteredPersons.map(person =>
                <Person key={person.name} person={person} />
            )}
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [personFilter, setPersonFilter] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = { name: newName, number: newNumber, id: persons.length + 1 }

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
            <Filter
                personFilter={personFilter}
                handleNameFilter={handleNameFilter}
            />
            <h3>Add a new</h3>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h3>Numbers</h3>
            <Persons
                filteredPersons={filteredPersons}
            />
        </div>
    )
}

export default App