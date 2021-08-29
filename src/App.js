import './App.css';
import React, { useEffect, useState, Component } from 'react';
import background from "./images/bgimg.jpg";
import axios from 'axios';
import Form from './form';

function App() {

  const [state, setState] = useState({
    joke:""
  })

  useEffect(()=>{
   fetchData()
  }, [])

  const fetchData = async () => {
    const results = await axios.get("https://api.chucknorris.io/jokes/random?category={category}");
    console.log(results.data);
    setState({
      ...state,
      joke:results.data
    })
  }

  

  return (
    <div className="App">
      <div className="Logo">
          <h1>Chuck Norris API</h1>
          <h3>You are about to laugh like a mad person</h3>
      </div>
      <div style={{backgroundImage:`url(${background})`} } className="contentPage">
          <div className="overlayBg">
              <div className="jokeCategoriesHeader">
                  <h2>Categories</h2>  
              </div>
              <div className="jokeCategoriesAll">
              <Form />
               
                 
              </div>
              <hr />

              {/* Jokes */}
              <div className="jokes">
                  <p className="joke">{state.joke}</p>
               
 
              </div>

          </div>
     
     </div>
    </div>
  
  );
}

export default App;