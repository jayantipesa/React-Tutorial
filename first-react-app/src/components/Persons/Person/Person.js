import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {

render() {
    console.log('[Person.js] rendering..');
    return (
        <div className={classes.person} >
            <div className={classes.personInfo}>
                <p>I am {this.props.name} and I am {this.props.age} years old</p>
                <button onClick={this.props.click} className={classes.deleteBtn}>Delete me</button>
            </div>
            <input type="text"  onChange={this.props.change} value={this.props.name}/>
            <input type="text" value={this.props.len} />
        </div>
    );
}
}

export default Person;