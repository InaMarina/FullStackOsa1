import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick} >
    {text}
  </button>
)

const Anecdote = (props) => {
  const anecdote = props.anecdote
  const votes = props.votes

  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [max, setMax] = useState(0)
  const [mostVotesAnecdoteIndex, setMostVotesAnecdoteIndex] = useState(0)


  const refresh = () => {

    ReactDOM.render(
      <App anecdotes={anecdotes} />,
      document.getElementById('root')
    )
  }

  const handleClick = () => {
    let number = Math.floor(Math.random() * 5)
    setSelected(number)
  }

  const vote = () => {
    /*set vote to anecdote*/
    const votes = props.anecdotes[selected].votes
    const votesU = votes + 1
    props.anecdotes[selected].votes = votesU
    refresh()

    /*set most votes to be used when showing the anecdote*/
    anecdotes.map((anecdote, index) => {
    
      if(anecdote.votes > max){
        setMax(anecdote.votes)
        setMostVotesAnecdoteIndex(index)
      }
      return 0;
    })

  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote anecdote={props.anecdotes[selected].anecdote} votes={props.anecdotes[selected].votes} />
      <Button onClick={vote} text='vote' />
      <Button onClick={handleClick} text='next anecdote' />
      <Header text='Anecdote with the most votes'></Header>
      <Anecdote anecdote={props.anecdotes[mostVotesAnecdoteIndex].anecdote} votes={props.anecdotes[mostVotesAnecdoteIndex].votes} />

    </div>
  )
}

const anecdotes =
  [
    {
      anecdote: 'If it hurts, do it more often',
      votes: 0

    },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      anecdote: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    }
  ]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)