import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

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
        <Persons persons={this.state.persons} 
                 onDelete={this.deletePersonHandler} 
                 onChangeNameHandler={this.onChangeNameHandler} />
        
      </div>
    )
  }

  render(){
    let persons =  null;
    let buttonClass = '';
    if(this.state.showPerson){
      persons = this.personObjects();
      buttonClass = classes.Red;
    }

    let assignedClasses = []
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>My First React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button className={buttonClass}
                  onClick={this.toogleHandler.bind(this)}>Click Me</button>
          {persons}
        </div>
    );
  }
}

export default App;
