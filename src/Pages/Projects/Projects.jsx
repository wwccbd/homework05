import React from 'react';
import './Projects.css';
import githubMark from './GitHub-Mark.png';
class Projects extends React.PureComponent {
  /*
    Project section is built from the state array projectList, making it refactorable for any number of objects.
    Each entry in the array will used to create a project in the GridContainer.
  */
  constructor(props) {
      super(props);
      this.state = {
          //Each project is a nested array containing 2 strings. index 0 being the display name, index 1 being the link to the project.
          projectsList: [
            ["Small Talk client", "https://github.com/wwccbd/smalltalkclient"], 
            ["Small Talk server", "https://github.com/wwccbd/smalltalkserver"], 
            ["CS 247 Homework02", "https://github.com/wwccbd/Homework-02-master"], 
            ["CS 247 Homework03", "https://github.com/wwccbd/homework03-states"], 
            ["CS 247 Homework04", "https://github.com/wwccbd/homework-04"], 
          ]
      }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h2>My current projects:</h2>
        </header>
        <div class="GridContainer">
          {this.state.projectsList.map((project) => (
            <div class="emptyDiv">
              <img src={githubMark} class="gitimg" alt="github mascot image"/>
              <a href={project[1]} target="_blank">{project[0]}</a>
            </div>
          ))}
        </div>
      </div>
    );

  }
}

export default Projects;
