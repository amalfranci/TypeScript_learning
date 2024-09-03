import React from 'react';

import './App.css';
import Great from './components/Great';
import Person from './components/Person';
import PersonList from './PersonList';
import Status from './components/Status';
import Oscar from './components/Oscar';
import Heading from './components/Heading';
import Button from './components/Button';

function App() {

  

  return (
    <div className="App">
    <h2> hello amal</h2>

    <Button  handleClick={(event,id)=>console.log("clicked",event,id)} />
     
   
    </div>
  ); 
}

export default App;
