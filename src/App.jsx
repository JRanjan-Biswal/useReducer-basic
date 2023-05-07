import { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'increment': return state+action.payload
    case 'decrement': return state-action.payload
    default: return state
  }
}

function App() {
  const [count, setCount] = useReducer(reducer, 1);

  return (
    <div>
      <button onClick={() => setCount({type: 'increment', payload: 4})}>+</button>
      <button onClick={() => setCount({type: 'decrement', payload: 1})}>-</button>
      <div>{count}</div>
    </div>
  )
}

export default App
