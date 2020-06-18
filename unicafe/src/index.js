import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
const Button = ({ handleClicK, text }) => {
  return (
  <button onClick={handleClicK}>
    {text}
  </button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </>
  )
}
const Statistics = (props) => {

  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <>
    <table>
      <tbody>
      <tr><StatisticLine text='Good' value={props.good} /></tr>
      <tr><StatisticLine text='Neutral' value={props.neutral} /></tr>
      <tr><StatisticLine text='Bad' value={props.bad} /></tr>
      <tr><StatisticLine text='All' value={props.all} /></tr>
      <tr><StatisticLine text='Average' value={(props.good * 1 + (props.bad * -1)) / (props.all)} /></tr>
      <tr><StatisticLine text='Positive' value={((props.good) / (props.all)) * 100 + ' %'} /></tr>
      </tbody>
      </table>
    </>
  )
}



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    console.log('clicked the good button')
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutralClick = () => {
    console.log('clicked the neutral button')
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => {
    console.log('clicked the bad button')
    setBad(bad + 1)
    setAll(all + 1)
  }


  return (
    <div>
      <Header text='give feedback' />
      <Button handleClicK={handleGoodClick} text='good'></Button>
      <Button handleClicK={handleNeutralClick} text='neutral'></Button>
      <Button handleClicK={handleBadClick} text='bad'></Button>
      <Header text='statistics' />
      <Statistics all={all} good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

