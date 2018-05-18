import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

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

  render(){
    return (
      <div className={classes.App}>
        <Cockpit clicked={this.toogleHandler}
                 appClasses={classes}
                 persons={this.state.persons}
                 doesShowPerson={this.state.showPerson}
                 deletePersonHandler={this.deletePersonHandler}
                 onChangeNameHandler={this.onChangeNameHandler}/>
      </div>
    );
  }
}

export default App;
