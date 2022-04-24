import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from '../counter/counterSlice'//gelen actions

const Counter = () => {
  const countValue = useSelector((state) => state.counter.value)//Buradaki value state tutulan value'dur, oradaki key name ne ise onu yazacaksın.
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0)

  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>&nbsp;
      <button onClick={() => dispatch(increment())}>Increment</button>

      <br /><br />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />&nbsp;
      <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Amount</button>

    </div>
  )
}

export default Counter


//NOT
//useSelector =>state ulaşmak için kullanılan hooks
//useDispatch =>actions ulaşmak için kullanılan hooks