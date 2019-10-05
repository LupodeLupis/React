import React, {Component, useState} from 'react'; 
import './App.css';

// The name of the imported file should be reffered to the name of the component with capital letter. 
import Person from './Person/Person'


/****************************************************THIS CODE BLOCK USE state DEFINED IN A CLASS******************************************* */
/******************************************************************************************************************************************* */
class App extends Component {
  // state is a reserved and special property that can be accessed only for component with class based.
  // state can be changed. If it changes lead React to  update the DOM
  state = {
    persons: [
      { name: 'Frank', age: 35},
      { name: 'Yuri', age: 58},
      { name: 'Mattew', age: 25},
    ]
  }
  switchNameHandler = (newName) => {
    console.log("click was cliecked")
    // ---> DO NOT DO THIS:  this.state.persons[0].name = 'Alberto'   
    this.setState({
      persons: [
        { name: newName, age: 26},
        { name: 'Yuri', age: 58},
        { name: 'Mattew', age: 25},
      ]
    })
  }

  nameChanged = (event) =>{
    this.setState({
      persons: [
        { name: 'Frank', age: 26},
        { name: event.target.value, age: 58},
        { name: 'Mattew', age: 25},
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>Hi Hello I am Alberto</h1>
       <p>This is working</p>
       <button onClick={() => this.switchNameHandler('Alberto')}>Switch Name</button>  
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Alberto!')}
          changed={this.nameChanged}>My Hobbies: tennis
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
     </div> 
     // <h1>Hi Hello I am Alberto</h1> --> in jsx we cannot do this we cannot render an element standalone, there must ONE root element that wrap anothers elements
   );
  }
 
  // The following code is the code that gets compile when we write code as the above. The following line 
  // is one reason that explain why is important to import React from 'react'
    
  // **** return React.createElement('div', {className: }, React.createElement('h1', null, 'Hi Hello I am Alberto')) ******
}

export default App;
/****************************************************************************************************************************************************** */
/****************************************************************************************************************************************************** */


/****************************************************THIS CODE BLOCK USE useState HOOK **************************************************************** */
/****************************************************************************************************************************************************** */


/***********************************************
 *  if you are using React hooks only
    you don't need to use class-based components
 **********************************************/
/** **********************************************************************************
 * useState returns an array with exactly two elements and always two elements : 
  *** first element is always our current state,
  *** The second element will always be a function that allows us to update this state
**************************************************************************************/
 /*const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Frank', age: 31},
      { name: 'Yuri', age: 58},
      { name: 'Enrique', age: 41},
    ],
  })

  const  [otherSomeState,otherSetState]  = useState({otherValues: 'some othe values'})
  console.log(personState, otherSomeState)
 
  const switchNameHandler = () => {
    setPersonState ({
      persons: [
        { name: 'Franklin', age: 26},
        { name: 'Yuri', age: 58},
        { name: 'Mattew', age: 25},
      ],
    })
    
  }
  return (
    <div className="App">
     <h1>Hi Hello I am Alberto</h1>
     <p>This is working</p>
     <button onClick={switchNameHandler}>Switched state</button>
     <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
     <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: tennis</Person>
     <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
   </div> 
 );
}

export default App;*/

/****************************************************************************************************************************************************** */
