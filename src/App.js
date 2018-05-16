import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Chinmay', age: 34, key:"6gcgd"},
      { name: 'Rohan', age: 45, key:"667gsg"},
      { name: 'Sachin', age: 23, key:"565fsgx"},
    ],
    showPerson: false,
  };

  deletePersonHandler = (index) =>{
    let ps = this.state.persons.slice();
    ps.splice(index, 1);
    this.setState({persons: ps});
  }

  onChangeNameHandler = (event, key)=>{
    let ps = this.state.persons.slice();
    let index = ps.findIndex((p) => {
      return p.key === key;
    });
    ps[index].name = event.target.value;
    this.setState({persons: ps});
  }

  toogleHandler = () =>{
    let doesShow = this.state.showPerson;
    this.setState({ showPerson : !doesShow});
  }

  personObjects = () =>{
    return (
      <div>
        {this.state.persons.map((person, index) => {
          return (
              <Person name={person.name}  
                      age={person.age}
                      onDelete={this.deletePersonHandler.bind(this, index)}
                      onChangeNameHandler={(event) =>{this.onChangeNameHandler(event, person.key)}}
                      key={person.key} />
          );
        })}
      </div>
    )
  }

  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons =  null;
    if(this.state.showPerson){
      persons = this.personObjects();
      style.backgroundColor = 'red';
    }

    let classes = []
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>My First React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} 
                onClick={this.toogleHandler.bind(this)}>Click Me</button>
        {persons}
      </div>
    );
  }
}

export default App;
