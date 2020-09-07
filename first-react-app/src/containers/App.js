import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons : [
      {id:1, name: "Jayanti", age: 22,len:0},
      {id:2, name:"Srishti", age:21,len:0}, 
      {id:3, name: "Deepshikha", age:21,len:0},
      {id:4, name: "Akansha", age:22,len:0}
    ],
    personDisplay: false,
    
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps ', props);
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {id:1, name: newName, age: 25},
        {id:2, name:"Srishti", age:21}, 
        {id:3, name: "Deepshikha", age:21},
        {id:4, name: "Akansha", age:22}
      ]
      
    }); 
  }

  nameChangedHandler = (id,event) => {
    const personIndex = this.state.persons.findIndex((cur) => {
      return cur.id===id;
    });
    const personData = {...this.state.persons[personIndex]};
    personData.name = event.target.value;
    personData.len = event.target.value.length;

    const person = [...this.state.persons];
    person[personIndex] = personData;
    
    // personData.forEach((cur)=> {
    //   if (cur.id===id)
    //     cur.name=event.target.value;
    // });
    this.setState({persons: person});
  }

  deleteNameHandler = (personIndex)=> {
    const personData = [...this.state.persons];
    personData.splice(personIndex,1);
    this.setState({persons : personData});

  }
  

  toggleDataHandler = () => {
    this.setState({
      personDisplay : !this.state.personDisplay,
    });
    
    console.log(this.state);
      
  }


  
    render()
    {
      console.log('[App.js] rendering...');
      let persons = null;
      if(this.state.personDisplay)
      {
       persons =<Persons 
                  persons={this.state.persons} 
                  clicked={this.deleteNameHandler} 
                  changed={this.nameChangedHandler} />
      }
      
      
        
        // <div>
        //     <Person 
        //     name={this.state.persons[0].name} 
        //     age={this.state.persons[0].age}
        //     change= {this.nameChangedHandler} 
        //     click={this.switchNameHandler.bind(this, 'Jpesa')}>I like to {this.state.hobby}</Person> 
        //   </div>
      
      //not html code but jsx code, gets compiled into stmt written below.

      return (
        
            <div className={classes.App}>
              <Cockpit
                title={this.props.appTitle} 
                persons={this.state.persons} 
                showPersons={this.state.personDisplay} 
                click={this.toggleDataHandler} />
              {persons}
            </div>
        
      );
    }
     
    //arguments: 1. tagname, 2. object passed to set configurations can be set to null to, 3. content inside the tag, can pass infinite number of agruments after that.
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Does this work?', 'it does'));
  }


export default App;





