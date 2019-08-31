import React, { useState, useEffect} from 'react';
import axios from "axios"; 

import Cards from "./components/Cards.js"; 

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] =useState({}); 
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    console.log("first render"); 
    axios.get("https://swapi.co/api/people/")
    .then(res => {
      console.log(res.data); 
      setData(res.data); 
    }); 
  }, []); 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className='cardcontainer'>
      {data.results && data.results.map(data =>(
        <Cards data ={data}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
