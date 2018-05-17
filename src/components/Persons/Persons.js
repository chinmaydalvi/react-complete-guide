import React from 'react';
import Person from './Person/Person';
//import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Persons = (props)=>{
    return(
      <div>
        {props.persons.map((person, index) => {
          return (
            // <ErrorBoundary>
              <Person name={person.name}  
                      age={person.age}
                      onDelete={() => props.onDelete(index)}
                      onChangeNameHandler={(event) =>{props.onChangeNameHandler(event, person.key)}}
                      key={person.key} />
            // </ErrorBoundary>
          );
        })}
      </div>
    )
};
export default Persons;