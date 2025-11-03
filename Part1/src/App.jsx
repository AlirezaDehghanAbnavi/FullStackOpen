const Header = (props) => {
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}

// const Part = (props) => {
//   return (
//     <p>{props.part} {props.exercise}</p>
//   )
// }

const Content = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
      {/* <Part part={props.part1}/>
      <Part part={props.part2}/>
      <Part part={props.part3}/> */}
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course}/>
      <Content name={part1.name} exercises={part1.exercises}/>
      <Content name={part2.name} exercises={part2.exercises}/>
      <Content name={part3.name} exercises={part3.exercises}/>
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

export default App