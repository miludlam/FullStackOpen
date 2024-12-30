import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const Average = (props) => {
    if (props.total === 0) {
        return (
            <p>average...</p>
        )
    }
    const avg = (props.good - props.bad) / props.total
    return (
        <p>average {avg}</p>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const goodClick = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        setTotal(updatedGood + neutral + bad)
    }

    const neutralClick = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setTotal(updatedNeutral + good + bad)
    }

    const badClick = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
        setTotal(updatedBad + good + neutral)
    }

    return (
        <div>
            <Header text="give feedback" />
            <Button handleClick={goodClick} text="good" />
            <Button handleClick={neutralClick} text="neutral" />
            <Button handleClick={badClick} text="bad" />
            <Header text="statistics" />
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {total}</p>
            <Average total={total} good={good} bad={bad} />
            <p>positive {good / total * 100} %</p>
        </div>
    )
}

export default App