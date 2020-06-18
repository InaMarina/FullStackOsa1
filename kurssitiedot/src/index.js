import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.name} {props.amount}
      </p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part name={props.parts[0].name} amount={props.parts[0].exercises} />
      <Part name={props.parts[1].name} amount={props.parts[1].exercises} />
      <Part name={props.parts[2].name} amount={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>

  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course)

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))