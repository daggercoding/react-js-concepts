import React from 'react'
import "../App.css"

const Card = ({value,onDecrement,onIncrement,name}) => {

    return (
    <>
    <div className='container'> 
      <img src="https://th.bing.com/th/id/OIP.xfI8KhSAyJHOdvth3sWEkgHaHa?pid=ImgDet&rs=1" height="100px" width="100px" />
      <h5>OLIVE OIL</h5>
      <h5>price 100rs</h5>
      <button name={name} onClick={(event)=>onDecrement(event)}>
       -
      </button>
      <h5>{value}</h5>
      <button name={name} onClick={(event)=>onIncrement(event)}>
      +
      </button>
      
    </div>
    </>
  )
}

export default Card
