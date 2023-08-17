import React, { useState } from 'react'
import Header from "./Components/Header"
import Card from './Components/Card'
import InputContainer from './Components/InputConatainer'


const App = () => {
  // const [value, setValue] = useState({
  //   val1: 0,
  //   val2: 0,
  //   val3: 0,
  //   val4: 0,
  // })
 
  // const onIncrement = (event) => {
  //   const name = event.target.name

  //   console.log(event.target.value);
  //     setValue(prev => ({...prev, [name]: value[name] + 1}))
  // } 

  // const onDecrement = (event) => {
  //   const name = event.target.name 
  //   console.log(event.target);
  //   setValue(prev => ({...prev, [name]: value[name] - 1}))

  // } 
  function getObject(data)
  {
    console.log("i am inside app.js")
    console.log(data);
  }

  return (
    <div className='Wrapper'>
      <InputContainer vishal={getObject}/>
      {/* <Header/>
      <Card onDecrement={onDecrement} onIncrement={onIncrement}  value={value.val1} name="val1"/>
      <Card onDecrement={onDecrement} onIncrement={onIncrement}  value={value.val2} name="val2"/>
      <Card onDecrement={onDecrement} onIncrement={onIncrement}  value={value.val3} name="val3"/>
      <Card onDecrement={onDecrement} onIncrement={onIncrement}  value={value.val4} name="val4"/> */}

    </div>
  )
}

export default App
