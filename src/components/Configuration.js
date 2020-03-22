import React, {Component} from 'react';

class Configuration extends Component {

    state = {
        pacmanRotation: 0
    }

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

    render() {
        return (
            <div className='configuration'>
                <h5 style={{fontWeight: 'bold'}}>configuration</h5>

                <div className='configure'>
                    <span className='configure-left'># sessions</span>
                    <span className='configure-right'><input type='number' className='input__number'></input></span>
                </div>

                <div className='configure'>
                    <span className='configure-left'>session</span>
                    <span className='configure-right'>
                        <form onSubmit={this.onSubmit}>
                            <input 
                                className='input__number'
                                type="number" 
                                value={this.state.pacmanRotation} 
                                onChange={this.handlePacmanRotation}
                            />
                            {/* <label> */}
                                <input
                                    className='input__submit'
                                    type='submit'
                                    value='Submit'
                                />
                                {/* <svg 
                                    height="500" 
                                    width="500"
                                    style={{position: "fixed"}}
                                >
                                    <circle 
                                        cx='400' cy='1' r='300' fill='rgba(0,0,0,0.5)' 
                                    />                                
                                </svg>
                            </label> */}

                        </form>
                    </span>                
                </div>

                <div className='configure'>
                    <span className='configure-left'>short break</span>
                    <span className='configure-right'><input type='number' className='input__number'></input></span>
                </div>

                <div className='configure'>
                    <span className='configure-left'>long break</span>
                    <span className='configure-right'><input type='number' className='input__number'></input></span>
                </div>

            </div>
        );
    }
}

export default Configuration;