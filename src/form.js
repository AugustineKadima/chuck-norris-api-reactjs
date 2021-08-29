import React,{ Component } from "react";

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            category:""
        }
    }

    handleCategoryChange = (event) =>{
        this.setState({
            category: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`${this.state.category}`)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                  <div>
                      <label>Jokes Categories</label>
                      <select value={this.state.category} onChange={this.handleCategoryChange}>
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
}

export default Form