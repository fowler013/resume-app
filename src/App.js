import React, { Component } from 'react';
//import WelcomeInfo from './components/WelcomeInfo'
import './App.css';
import SkillsList from './components/SkillsList'


// THIS IS WHERE I WILL CREATE THE CLASS AND ADD THE WELCOMEINFO//

class App extends Component { // BELOW CREATE THE CONSTRUCTOR, SUPER, AND THE STATES//
  constructor(props) {
    super(props)

    //MAKE SURE THE STATE IS CREATED WITHIN THE CONSTRUCTOR//

    this.state = { // CREATE A SKILLSLIST.JSX//
      skills: '',
      id: 4,
      items: []
    }


    this.state.items = [
      {skills: 'HTML', id: 0},
      {skills: 'CSS', id: 1},
      {skills: 'JavaScript', id: 2},
      {skills: 'JQuery', id: 3},
      {skills: 'React', id: 4},
    ]
    
  }
  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tevin's Resume</h1>
        </header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
           
        

        <SkillsList 
        items = {this.state.items}
        />
      </div>
    );
  }
}

export default App;
