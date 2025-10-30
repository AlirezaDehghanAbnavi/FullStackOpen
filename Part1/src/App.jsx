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
    <p> Number of exercises {props.noExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React' , exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ]
    

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>

      <Content part={part1} exercise={exercises1}/>

      <Content part={part2} exercise={exercises2}/>

      <Content part={part3} exercise={exercises3}/>

      <Total noExercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App