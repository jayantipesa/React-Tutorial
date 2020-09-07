import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const paraClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
      if(props.persons.length<=2)
        paraClasses.push(classes.red);
      if(props.persons.length<=1)
        paraClasses.push(classes.bold);
      
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <button
              className={btnClass}
              key= '2' 
              onClick={props.click}>Toggle data</button>
        </div>
    );
}

export default cockpit;