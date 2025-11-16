const Header = ({course}) => {
  return (
    <div>
    <h3>{course.name}</h3>
    </div>
  )
}

const Module = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part => 
        <Module key={part.id} part={part}/>
      )}
    </div>
  )
}

const Course = ({courses}) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      )}
    </div>
  )
}

const Total = ({course}) => {
  const sumOfExercises = course.parts.reduce((sum, part)=> sum + part.exercises, 0);
  return (
    <h4>
      total of {sumOfExercises} exercises
    </h4>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses}/>
    </div>
  )
}

export default App