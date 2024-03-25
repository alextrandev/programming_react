import './App.css'
import foxImg from './assets/foxes4ev.png'
import Box from "./Box"
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPerson] = useState([
    {id:"1", name:"Maria", title:"CEO", location:"Helsinki"},
    {id:"2", name:"John", title:"CTO", location:"London"},
    {id:"3", name:"Vera", title:"CMO", location:"Berlin"}
  ]);

  return (
    <>
      <img src={foxImg} alt="image of a sleeping fox"/>
      <p>Counter: {counter}</p>
      <div className='container'>
      {persons.map(person => (
        <Box 
          key={person.id}
          name={person.name} 
          title={person.title}
          location={person.location}
        />
      ))}
      </div>
    </>
  )
}

export default App
