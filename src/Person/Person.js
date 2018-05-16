import React from 'react';
import classes from './Person.css';
const person = (props) =>{
    return(
        <div className={classes.Person}>
            <p onClick={props.onDelete}>I'm  {props.name} Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.onChangeNameHandler} value={props.name}/>
        </div>
    );
}

export default person;
