import React, {useState} from 'react';
import DescImage from './logo.svg';
import './Page.css';
import Projects from '../Projects/Projects';

function MainPage() {
  //state for toggling the navigation menu on or off.
  const [showMenu, setshowMenu] = useState(true);
  //ToggleMenu will set the state of showMenu (boolean) to the opposite of what its current value is.
  function ToggleMenu() {
    setshowMenu(!showMenu)
  }
  React.useEffect(() => {
    /*
      If the window is outside mobile width (greater then 400px) and the showMenu is false, set it back to true.
      else the show menu state is false and hidden for mobile until the menu button is pressed.
    */
    window.addEventListener("resize", () => {
      if (document.getElementById('pagewrapper').offsetWidth > 400) {
        if (!showMenu) {setshowMenu(!showMenu)};
      } else {
        if (showMenu) {setshowMenu(!showMenu)};
      }
    });
  }, [showMenu]);
    return (
      <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
      <div id="pagewrapper">
        <div className="topbar">
          <div className="myWebsite">
            <button className="homeButton"><i class="fa-solid fa-house Purple"></i> Ben's Website</button>
          </div>
            <button className="toggleMenu" onClick={() => ToggleMenu()}>
                  <i className="fa-solid fa-bars"></i>
            </button>
            {showMenu && 
              <div id="LinksBar" className="Links">
                <div id="NavLinks">
                <button className="topbarItem topbarItemSelected">Home</button>
                <button className="topbarItem">Portfolio</button>
                <button className="topbarItem">Blog</button>
                <button className="topbarItem">About Me</button>
                <button className="topbarItem">Contact Me</button>
              </div>
            </div>
            }
          <div className="TopSection">
            <div className="Desc">
              <h1>Welcome to Ben's Responsive Website</h1>
              <p>Hello, I'm Ben. I'm a computer science student interested in software development. I am currently attending Walla Walla Community College.
                I'm on track to graduate with an associate degree in Fall 2022.
                I personally like to work with React, Electron, Nodejs and plain javascript. 
                Take a look at some of my github projects below.
              </p>
            </div>
            <img src={DescImage} className="introImage" />
          </div>
          <div className="BottomSection">
            <Projects />
          </div>

        </div>

    
     
      </div>
  
    </div>
    );


}

export default MainPage;

