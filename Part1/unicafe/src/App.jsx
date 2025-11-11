import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Display = props => <div>{props.text} {props.value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    <Display/>
    <Display text="good" value={good}/>
    <Display text="neutral" value={neutral}/>
    <Display text="bad" value={bad}/>
    <Display text="all" value={bad+good+neutral}/>
    <Display text="average" value={(good-bad)/(good+bad+neutral)}/>
    <Display text="positive:" value={good/(good+bad+neutral) + " %"}/>
    
    </div>
  )
}

export default App