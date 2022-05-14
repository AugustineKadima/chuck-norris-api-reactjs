import './App.css';
import React, { useEffect, useState } from 'react';
import background from "./images/bgimg.jpg";
import axios from 'axios';
import Form from './form';

function App() {

  const [myJoke, setJoke] = useState({joke:"No Joke"})

  let [myCategory, setMyCategory] = useState("")

  function handleCategoryInput(input){
    setMyCategory(input)
  }
  
  useEffect(()=>{
    // fetch(`https://api.chucknorris.io/jokes/random?category=${myCategory}`)
    // .then(data => data.json)
    // .then(allJokes => {
    //   console.log(allJokes)
    //   // setJoke(allJokes.joke)
    // }
     
      
    //   )
 
   setMyCategory(  fetchData())
  }, [])

  const fetchData = async () => {
    const results = await axios.get(`https://api.chucknorris.io/jokes/random?category=${myCategory}`);
    console.log(results.data.value);
    return results.data.value
    // setJoke(results.data.value)
    // setJoke({
    //   ...myJoke,
    //   joke:results.data.value
    // })
  }

  
console.log(myJoke)
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
              <Form handleCategoryInput={handleCategoryInput}/>
               
                 
              </div>
              <hr />

              {/* Jokes */}
              <div className="jokes">
                  <p className="joke">{myJoke.joke}</p>
                  {/* <p className="joke">{JSON.stringify(this.props.category)}</p> */}
 
              </div>

          </div>
     
     </div>
    </div>
  
  );
}

export default App;
