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

const Total = ({course}) => {
  const sumOfExercises = course.parts.reduce((sum, part)=> sum + part.exercises, 0);
  return (
    <h4>
      total of {sumOfExercises} exercises
    </h4>
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

export default Course