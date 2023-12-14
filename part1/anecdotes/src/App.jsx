import { useState } from 'react'

const Anecdotes = (props) => {
  return(
    <div>
      <div>{props.anecdotes}</div>
      <div>has {props.votes} votes</div>
    </div>
  )
}

const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
  )
}

const MostVotes = (props) => {
  return (
    <div>
      <div>{props.anecdotes}</div>
      <div>has {props.max} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))

  const nextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
    /* Math.floor rounds a number down to the nearest integer */
  const voteClick = () => {
    const newVotes = [...voted]
    newVotes[selected] += 1
    setVoted(newVotes)
  }
    /* 
    1. const newVotes = [...voted];: This line creates a new array (newVotes) by spreading the elements of the existing voted array into it. 
    This creates a shallow copy of the voted array, ensuring that modifying newVotes doesn't affect the original voted array.

    2.newVotes[selected] += 1;: This line increments the value at the selected index in the newVotes array. 
    It assumes that selected is a variable representing the index you want to update.

    3.setVoted(newVotes);: This line updates the state variable voted with the modified newVotes array, 
    triggering a re-render of the component. 
    */
  
  const max = Math.max(...voted)
  const index = voted.indexOf(max)
    /* Title, Anecdotes, Button, MostVotes are all have been defined and values are passed using props  */
  return (
    <div>
      <h2>
        Anecdote of the day
      </h2>
      <Anecdotes anecdotes={anecdotes[selected]} votes={voted[selected]}/>
      <Button handleClick={nextClick} text='next anecdote'/>
      <Button handleClick={voteClick} text='vote'/>
      <h2>
        Anectode with most vote
      </h2>
      <MostVotes anecdotes={anecdotes[index]} max={max} />
    </div>
  )
}

export default App;

