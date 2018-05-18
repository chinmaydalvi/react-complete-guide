import React from 'react';
import Persons from '../Persons/Persons';

const cockpit = (props) =>{

  const personObjects = () =>{
    return(
      <div>
        <Persons persons={props.persons} 
                 onDelete={props.deletePersonHandler} 
                 onChangeNameHandler={props.onChangeNameHandler} />
      </div>
    )
  }

  let buttonClass = '';
  let personsObj = null;
  if(props.doesShowPerson){
    personsObj = personObjects();
    buttonClass = props.appClasses.Red;
  }

  let assignedClasses = []
  if(props.persons.length <= 2){
    assignedClasses.push(props.appClasses.red);
  }

  if(props.persons.length <= 1){
    assignedClasses.push(props.appClasses.bold);
  }

  return(
    <div>
      <h1>My First React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={buttonClass}
              onClick={props.clicked}>Click Me</button>
      {personsObj}
    </div>
  );
};

export default cockpit;