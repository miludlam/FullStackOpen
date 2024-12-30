import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = (props) => {
    const count = props.good + props.neutral + props.bad

    if (count === 0) {
        return (
            <div>No feedback given</div>
        )
    }

    // Ratings are: good +1, neutral 0, bad -1
    const avg = ((props.good - props.bad) / count).toFixed(2)
    const positive = (props.good / count * 100).toFixed(2) + " %"

    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={props.good} />
                <StatisticLine text="neutral" value={props.neutral} />
                <StatisticLine text="bad" value={props.bad} />
                <StatisticLine text="all" value={count} />
                <StatisticLine text="average" value={avg} />
                <StatisticLine text="positive" value={positive} />
            </tbody>
        </table>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodClick = () => {
        setGood(good + 1)
    }

    const neutralClick = () => {
        setNeutral(neutral + 1)
    }

    const badClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Header text="give feedback" />
            <Button handleClick={goodClick} text="good" />
            <Button handleClick={neutralClick} text="neutral" />
            <Button handleClick={badClick} text="bad" />
            <Header text="statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App