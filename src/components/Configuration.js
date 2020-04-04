import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

// class Configuration extends Component {

//     state = {
//         pacmanRotation: 0
//     }

//     handlePacmanRotation = (event) => {
//         this.setState({
//             pacmanRotation: event.target.value
//         })
//     }

//     onSubmit = (event) => {
//         document.documentElement.style.setProperty(
//             '--pacman-rotation', 
//             this.state.pacmanRotation
//         );
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <div className='configuration'>
                
//                 <h5 style={{fontWeight: 'bold'}}>configuration</h5>

//                 <div className='configure'>
//                     <span className='configure-left'>session length</span>
//                     <span className='configure-right'>
//                         <form onSubmit={this.onSubmit}>
//                             <input 
//                                 className='input__number'
//                                 type="number" 
//                                 value={this.state.pacmanRotation} 
//                                 onChange={this.handlePacmanRotation}
//                             />
//                             <input
//                                 className='input__submit'
//                                 type='submit'
//                                 value='Submit'
//                             />

//                         </form>
//                     </span>                
//                 </div>

//                 <div className='configure'>
//                     <span className='configure-left'>break length</span>
//                     <span className='configure-right'><input type='number' className='input__number'></input></span>
//                 </div>

//             </div>
//         );
//     }
// }

class Configuration extends React.Component {

    constructor() {
        super();
        this.state = {
            // isSession: true,
            // timerSecond: 0,
            // intervalId: 0
        };

        this.decreaseCounter = this.decreaseCounter.bind(this);
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseSession = this.decreaseSession.bind(this);
        this.increaseSession = this.increaseSession.bind(this);
    }

    decreaseCounter() {
        if(this.props.breakInterval === 1) {
            return;
        }
        this.props.decreaseBreak();
    }

    increaseCounter() {
        if(this.props.breakInterval === 60) {
            return;
        }
        this.props.increaseBreak();
    }

    decreaseSession() {
        if(this.props.sessionLength === 60) {
            return;
        }
        this.props.decreaseSession();
    }

    increaseSession() {
        if(this.props.sessionLength === 1) {
            return;
        }
        this.props.increaseSession();
    }

    render() {
        return(
            <div className='configuration'>
            
                <h5 style={{fontWeight: 'bold'}}>configuration</h5>
    
                <div className='configure'>
                    <p className='configure__type'>Session Length</p>
                    <button className='configure__remote' onClick={this.decreaseSession}>
                        <FontAwesomeIcon className='configure__remote__down' icon={faChevronUp} />
                    </button>
                    <p>{this.props.sessionLength} min</p>
                    <button className='configure__remote' onClick={this.increaseSession}>
                        <FontAwesomeIcon className='configure__remote__up'  icon={faChevronUp} />
                    </button>
                </div>
    
                <div className='configure'>
                    <p className='configure__type'>Break Length</p>
                    <button className='configure__remote' onClick={this.decreaseCounter}>
                        <FontAwesomeIcon className='configure__remote__down' icon={faChevronUp} />
                    </button>
                    <p>{this.props.breakInterval} min</p>
                    <button className='configure__remote' onClick={this.increaseCounter}>
                        <FontAwesomeIcon className='configure__remote__up' icon={faChevronUp} />
                    </button>
                </div>
    
                <div className='configure'>
                    <p className='configure__type'>Play</p>
                    <button className='configure__remote' onClick={this.playTimer}>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                </div>
    
                <div className='configure'>
                    <p className='configure__type'>Pause</p>
                    <button className='configure__remote' onClick={this.stopTimer}>
                        <FontAwesomeIcon icon={faPause} />
                    </button>
                </div>
    
                <div className='configure'>
                    <p className='configure__type'>Reset</p>
                    <button className='configure__remote' onClick={this.resetTimer}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>
    
            </div>
        );
    }
}

export default Configuration;