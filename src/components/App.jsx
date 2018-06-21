import React, { Component, Fragment } from 'react';
//import WelcomeInfo from './components/WelcomeInfo'
//import './App.css';
//import SkillsList from './components/SkillsList'
import{BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Skills from './Skills'






class App extends Component{
  render(){
    return(
      <Fragment>
        <Router>
          <Fragment>
            <div className = "nav nav-tabs d-flex justify-content-around fixed-top bg-white pt-2 pb-2">
              <Link to = "/" >About Me</Link>
              <Link to = "/skills" className="btn-films btn-outline-primary btn button" >Skills</Link>
              <Link to = "/projects" >Projects</Link>
            </div>
            
            <div className = "">
              <Switch>
                <Route />
                <Route exact path = "/skills" component = {Skills}/>
                <Route />
              </Switch>
            </div>
            
          </Fragment>
        </Router>
      </Fragment>
    )
  }
}


export default App;











































//CREATE TABDATA ARRAY//
// var tabData = [
//   {name: 'About Me', isActive: true},
//   {name: 'Skills', isActive: false},
//   {name: 'Projects', isActive: false},
// ];

// // THIS IS A TEST//

// // THIS IS WHERE I WILL CREATE THE CLASS AND ADD THE WELCOMEINFO//

// class App extends Component { // BELOW CREATE THE CONSTRUCTOR, SUPER, AND THE STATES//
//   constructor(props) {
//     super(props)

//     //MAKE SURE THE STATE IS CREATED WITHIN THE CONSTRUCTOR//

//     this.state = { // CREATE A SKILLSLIST.JSX//
//       skills: '',
//       id: 4,
//       items: []
//     }


//     this.state.items = [
//       {skills: 'HTML', id: 0},
//       {skills: 'CSS', id: 1},
//       {skills: 'JavaScript', id: 2},
//       {skills: 'JQuery', id: 3},
//       {skills: 'React', id: 4},
//     ]
    
// //   }
  



//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Tevin's Resume</h1>
//         </header>
//         <ul className="nav nav-tabs" id="myTab" role="tablist">
//   <li className="nav-item">
//     <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About Me</a>
//   </li>
//   <li className="nav-item">
//     <a onClick ={(event) => {this.handleClick()}} className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Skills</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Projects</a>
//   </li>
// </ul>
// <div className="tab-content" id="myTabContent">
//   <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="aboutme-tab">...</div>
//   <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="skills-tab">
      
//       <SkillsList 
//         items = {this.state.items}
//         />
//         </div>
//   <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="projects-tab">...</div>
// </div>
           
        

        
//       </div>
//     );
//   }
// }

