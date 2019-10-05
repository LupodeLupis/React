import React, {Component} from 'react';
import './App.css';

// The name of the imported file should be reffered to the name of the component with capital letter. 
import Person from './Person/Person'

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
  render() {
    return (
      <div className="App">
       <h1>Hi Hello I am Alberto</h1>
       <p>This is working</p>
       <button>Switched state</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: tennis</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
     </div> 
     // <h1>Hi Hello I am Alberto</h1> --> in jsx we cannot do this we cannot render an element standalone, there must ONE root element that wrap anothers elements
   );
  }
 
  // The following code is the code that gets compile when we write code as the above. The following line 
  // is one reason that explain why is important to import React from 'react'
    
  // **** return React.createElement('div', {className: }, React.createElement('h1', null, 'Hi Hello I am Alberto')) ******
}

export default App;
