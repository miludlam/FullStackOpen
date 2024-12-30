import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Anecdote = ({ text, points }) => (
    <div>
        <p>{text}</p>
        <p>has {points} votes</p>
    </div>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

    const getRandomAnecdote = () => {
        const index = Math.floor(Math.random() * anecdotes.length)
        setSelected(index)
    }

    const addVote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }

    const getPopularAnecdote = () => {
        let idx = 0
        for (let i = 0; i < points.length; i++) {
            if (points[i] > points[idx]) {
                idx = i
            }
        }
        return idx
    }

    return (
        <div>
            <Header title="Anecdote of the day" />
            <Anecdote text={anecdotes[selected]} points={points[selected]} />
            <Button handleClick={addVote} text="vote" />
            <Button handleClick={getRandomAnecdote} text="next anecdote" />
            <Header title="Anecdote with most votes" />
            <Anecdote text={anecdotes[getPopularAnecdote()]} points={points[getPopularAnecdote()]} />
        </div>
    )
}

export default App