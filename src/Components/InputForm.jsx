import React,{useState} from 'react'

const InputForm = (props) => {
    const [newtitle,setTitle]=useState("");
    const [newdate,setDate]=useState("");
    function titleHandler(event)
    {
    setTitle(event.target.value);
    }
 
    function dateHandler(event)
    {
    setDate(event.target.value);
    }
   

    function submitHandler(event)
    {
     event.preventDefault();
     const data =
     {
        title:newtitle,
        date:newdate
     }
     setTitle("");
     setDate("");
     console.log(data);
     props.vishalsingh(data);
    }
  
  return (
    <>
    <form onSubmit={submitHandler}>
    <div>
        <h1>TITLE</h1>
        <input type="text" value={newtitle} onChange={titleHandler} ></input>
    </div>
    <div>
        <h1>Date</h1>
        <input type='date' value={newdate}  onChange={dateHandler}></input>
    </div>
    <button type='submit' >Submit</button>
    </form>
    </>
  )}

export default InputForm