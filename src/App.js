import React, { Component } from 'react';
import './App.css';

const Cour = () =>{
return(
  <div>
    j'apprends Javascript
  </div>
)
}
const Programmation= () => {
return (
  <di>
    Pour faire un site web
  </di>
)
}

const Button=(props)=>{
return(
  <button>
    Sign up
  </button>
)

}



class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Create your owner quotes</h1>
        <Cour/>
        <Programmation/> <br/>
        <Programmation/> <br/>
        <Programmation/><br/>
        <Button/>
      </div>
    );

  }
  
}

export default App;
