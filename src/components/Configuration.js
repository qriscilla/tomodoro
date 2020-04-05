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

    constructor(props) {
        super(props);
        this.state = {
            isSession: true,
            timerSecond: this.props.timerSecond,
            // timerSecond: 0,
            intervalId: 0
        };

        this.decreaseCounter = this.decreaseCounter.bind(this);
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseSession = this.decreaseSession.bind(this);
        this.increaseSession = this.increaseSession.bind(this);

        this.playTimer = this.playTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    // Decrease Break
    decreaseCounter() {
        if(this.props.breakInterval === 1) {
            return;
        }
        this.props.decreaseBreak();
    }

    // Increase Break
    increaseCounter() {
        if(this.props.breakInterval === 60) {
            return;
        }
        this.props.increaseBreak();
    }

    // Decrease Session
    decreaseSession() {
        if(this.props.sessionLength === 60) {
            return;
        }
        this.props.decreaseSession();
    }

    // Increase Session
    increaseSession() {
        if(this.props.sessionLength === 1) {
            return;
        }
        this.props.increaseSession();
    }

    // PLAY
    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

    // Decrease seconds
    decreaseTimer() {
        switch(this.state.timerSecond) {
            case 0:
                if(this.props.timerMinute === 0) {
                    if(this.state.isSession) {
                        this.setState({
                            isSession: false
                        });
                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.updateTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                    this.sendData();
                }
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1,
                    }
                })
                this.sendData();
                break;
        }
    }

    sendData = () => {
        this.props.parentCallback(this.state.timerSecond);
    }

    // PAUSE 
    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    // RESET
    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        });
    }

    render() {
        return(
            <div>

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
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <button className='configure__col' onClick={this.playTimer}>
                                <p>Play</p>
                                <FontAwesomeIcon className='configure__remote' icon={faPlay} />
                            </button>
                        </div>
                        <div className='col-4'>
                            <button className='configure__col' onClick={this.stopTimer}>
                                <p>Pause</p>
                                <FontAwesomeIcon className='configure__remote' icon={faPause} />
                            </button>
                        </div>
                        <div className='col-4'>
                            <button className='configure__col' onClick={this.resetTimer}>
                                <p>Reset</p>
                                    <FontAwesomeIcon className='configure__remote' icon={faPowerOff} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Configuration;