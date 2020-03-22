import React from 'react';

class Pacman extends React.Component {
    state = {
      pacmanRotation: 0
    }
  
    componentDidUpdate() {
      document.documentElement.style.setProperty(
        '--pacman-rotation', 
        this.state.pacmanRotation
      )
    }
    handlePacmanRotation = (event) => {
      this.setState({
        pacmanRotation: event.target.value
      })
    }
    render() {
      return(
        <React.Fragment>
          <header className="app__header">
          <h1>CSS API for React ;)</h1>
          <p>Let's use CSS variables (a.k.a. custom properties) as an api exposed for React so we can modify the CSS without modify the CSS ;)</p>
          </header>
          <main className="app__main">
            <div className="controlPanel">
              Rotate Pacman about &nbsp;
              <input 
                type="number" 
                value={this.state.pacmanRotation} 
                onChange={this.handlePacmanRotation}
              /> &nbsp;degree.
            </div>
            <div className="pacman"></div>    
           </main>
          </React.Fragment>
      );
    }
  }
  
export default Pacman;