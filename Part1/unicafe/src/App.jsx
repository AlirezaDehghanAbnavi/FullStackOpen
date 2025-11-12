import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
    const { good, bad, neutral, total} = props;
    if(total == 0) return <div>No feedback given</div>
    return (
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/> 
            <StatisticLine text="all" value={total}/>
            <StatisticLine text="average" value={(good - bad) / total}/>
            <StatisticLine text="positive" value={(good / total * 100) + " %"}/>
          </tbody>  
        </table>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral

  const setGoodHandler = () => {
    console.log("Good Feedback")
    setGood(good + 1);
  }

  const setNeutralHandler = () => {
    console.log("Neutral Feedback")
    setNeutral(neutral + 1);
  }

  const setBadHandler = () => {
    console.log("Bad Feedback")
    setBad(bad + 1);
  }

  return (
    <div>
    <h1>give feedback</h1>
    <Button onClick={setGoodHandler} text="good"/>
    <Button onClick={setNeutralHandler} text="neutral"/>
    <Button onClick={setBadHandler} text="bad"/>
    <h1>statistcs</h1>
    <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

export default App