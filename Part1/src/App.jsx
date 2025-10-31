const Header = (props) => {
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercises={props.parts[0].exercise}/>
      <Part part={props.parts[1].part} exercises={props.parts[1].exercise}/>
      <Part part={props.parts[2].part} exercises={props.parts[2].exercise}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React' , exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ]
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App