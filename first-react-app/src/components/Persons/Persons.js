import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
  getDerivedStateFromProps(props,state) {
    console.log('[Persons.js] getDerivedSatefromProps ', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
    render() {
      console.log('[Persons.js] rendering...')
      return this.props.persons.map((person,index) => {
              return (
                <Person 
                click={this.props.clicked.bind(this, index)} 
                name={person.name} 
                age={person.age}
                key={person.id}
                change={this.props.changed.bind(this, person.id)}
                len={person.len} />
              );
            });
    }
    
}

export default Persons;