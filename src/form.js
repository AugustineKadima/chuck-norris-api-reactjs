import React, {useState}from "react";


function Form({handleCategoryInput}){
  
    let [category, setCategory] = useState("")

    let handleCategoryChange = (event) =>{
        setCategory(event.target.value)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault()
        handleCategoryInput(category)
    }

   
        return(
            <div>
                <form onSubmit={handleSubmit}>
                  <div>
                      <label>Jokes Categories</label>
                      <select value={category} onChange={handleCategoryChange}>
                        <option selected>Select category</option>
                        <option value="animal">Animal</option>
                        <option value="career">Career</option>
                        <option value="celebrity">Celebrity</option>
                        <option value="dev">Dev</option>
                        <option value="explicit">Explicit</option>
                        <option value="fashion">Fashion</option>
                        <option value="food">Food</option>
                        <option value="history">History</option>
                        <option value="money">Money</option>
                        <option value="movie">Movie</option>
                        <option value="music">Music</option>
                        <option value="political">Political</option>
                        <option value="religion">Religion</option>
                        <option value="science">Science</option>
                        <option value="sport">Sport</option>
                        <option value="travel">Travel</option>
                    </select>
                    <button type="submit">Find Joke</button>
                  </div>                   
                </form>
            </div>
        )
    }


export default Form