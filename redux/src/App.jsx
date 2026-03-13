import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy5 } from './redux/slices/counterSlice';
import Navbar from './components/Navbar.jsx';


const App = () => {
  const dispath = useDispatch();
  const num = useSelector((state)=>state.counter.value);

  return (
    <div>
      <h1>value is {num}</h1>
      <button onClick={()=>{dispath(increment())}}>increment</button>
      <button onClick={()=>{dispath(decrement())}} >decrement</button>
      <button onClick={()=>{dispath(incrementBy5())}} >increment by 5</button>

      <Navbar />
    </div>
  )
}

export default App