/* eslint-disable no-unused-vars */
import './App.css'
import foxImg from './assets/foxes4ev.png'
import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import PersonsContainer from './components/PersonsContainer';
import Counter from './components/Counter';
import Form from './components/Form';
import View from './components/View';

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPerson] = useState([
    {id:"1", name:"Maria", title:"CEO", location:"Helsinki"},
    {id:"2", name:"John", title:"CTO", location:"London"},
    {id:"3", name:"Vera", title:"CMO", location:"Berlin"}
  ]);
  const [inputValues, setInputValue] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

    const clickIncreaseHandler = () => setCounter(counter + 1);
    const clickDecreaseHandler = () => setCounter(counter - 1);
    const clickResetHandler = () => setCounter(0);

    const inputChangeHandler = e => setInputValue({...inputValues, [e.target.name]: e.target.value});
  
  return (
    <>
      <Header />

      <main className='flex flex-col items-center bg-white bg-opacity-40'>
        <img src={foxImg} alt="image of a sleeping fox"/>
        <Counter
          counter={counter} 
          clickIncreaseHandler={clickIncreaseHandler}
          clickDecreaseHandler={clickDecreaseHandler}
          clickResetHandler={clickResetHandler}
        />
        <Form inputChangeHandler={(e) => inputChangeHandler(e)}/>
        <View {...inputValues}/>
        <PersonsContainer persons={persons} />
      </main>

      <Footer />
    </>
  )
}

export default App
