import React, {Component} from 'react';
import AnimeCropped from '../images/AnimeCropped.png';

class Circle extends Component {

    state = {
        pacmanRotation: 0
      }

    //   componentDidUpdate() {
    //     document.documentElement.style.setProperty(
    //       '--pacman-rotation', 
    //       this.state.pacmanRotation
    //     )
    //   }

      handlePacmanRotation = (event) => {
        this.setState({
          pacmanRotation: event.target.value
        })
      }

      onSubmit = (event) => {
        document.documentElement.style.setProperty(
            '--pacman-rotation', 
            this.state.pacmanRotation
        );
        event.preventDefault();
      }

///


    render() {
        return (
            <div className='circle'>
                <svg height="670" width="670">
                    <circle cx="350" cy="350" r="300" fill='none' stroke='white' strokeWidth='40' />
                    <circle 
                        cx='350' cy='350' r='300' fill='none' 
                        stroke='black' strokeWidth='40' 
                        className='ciircle'
                    />
                    {/* <circle className="progress__value" cx='350' cy='350' r='300' fill='none' stroke='black' strokeWidth='40' /> */}
                    <image className='img-circle' xlinkHref={AnimeCropped} x='70' y="15" height="670" width="670" />
                </svg>


                <form onSubmit={this.onSubmit}>
                    <input 
                        type="number" 
                        value={this.state.pacmanRotation} 
                        onChange={this.handlePacmanRotation}
                    />
                    <input
                        type='submit'
                        value='Submit'
                    />
                </form>


            </div>
        );
    }
}

export default Circle;