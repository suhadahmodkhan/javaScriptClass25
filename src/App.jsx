import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from  "./Home"
import Task from './Task'
import Info from './Info'

function App() {
  // useState, useEffect is a react hook
  const [count, setCount] = useState(0)
  const [data , setData] = useState([])
  console.log(data)
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then(response => response.json())
    .then(data => setData(data.data))
  },[count])
//   const data = [
//     { "name": "Alice", "roll": 101, "age": 20 },
//     { "name": "Bob", "roll": 102, "age": 21 },
//     { "name": "Charlie", "roll": 103, "age": 22 },
//     { "name": "Diana", "roll": 104, "age": 19 },
//     { "name": "Ethan", "roll": 105, "age": 23 }
// ]
const person = ['hakim', "doly mem"," shahera mem" ]
// let counter = 0 ;
// const object = { name : "aminul ", age : 16}
// console.log(object.name)
// const {name, age} = object ;
// console.log(name , age)
// const array = [16, 25]
// console.log(array[1])
// const [first , second] = array
// console.log(first , second)
const handleConfirm = () => {
  // console.log("confirm button ok")
  // counter = counter + 1
  // count = count + 1
  setCount(count + 1)
  
}
const style = {
  border : '2px solid salmon'
}
  return (
    <>
      {/* <h1>Vite + React</h1>
      <Home name="suhad" />
     <Task name="html" isDone={"true"}/>
     <Task name="css" isDone={"true"}/>
     <Task name="js" isDone={"true"}/>
     <Task name="react" isDone={"running"}/>
     <Task name="authentication" isDone={"false"}/>
     <Task name="backend" isDone={"false"}/> */}
     {/* <Info/> */}
     {/* {
      person.map((person , index) => <Info person={person} key={index}></Info>)
     } */}
     {console.log("reacting")}
     {/* <button onClick={() => handleConfirm()}>Confirm</button> */}
     {/* <h1>counter : {count}</h1> */}

     {
      data?.map(phone => <div key={phone.slug} style={{border: '2px solid salmon', marginTop:'10px'}}>
        <img src={phone.image}></img>
        <h1>Name : {phone.phone_name}</h1>
        
      </div>)
     }
    </>
  )
}

export default App
