import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

const Persons = (props)=>{
    return(
      <div>
        {props.persons.map((person, index) => {
          return (
            <ErrorBoundary key={person.key}>
              <Person name={person.name}  
                      age={person.age}
                      onDelete={() => props.onDelete(index)}
                      onChangeNameHandler={(event) =>{props.onChangeNameHandler(event, person.key)}}
                      />
            </ErrorBoundary>
          );
        })}
      </div>
    )
};
export default Persons;