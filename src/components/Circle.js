import React, {Component} from 'react';
import AnimeCropped from '../images/AnimeCropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

class Circle extends Component {

    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        };

        this.playTimer = this.playTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

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
                }
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

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
        return (
            <div className='circle'>
                <svg height="670" width="670" className='svg'>
                    <circle 
                        cx="350" cy="350" r="300" fill='none' 
                        stroke='white' strokeWidth='40' 
                        className='ciiircle'
                    />
                    <circle 
                        cx='350' cy='350' r='300' fill='none' 
                        stroke='black' strokeWidth='40' 
                        className='ciircle'
                    />
                    <svg height='670' width='670' className='svgg'>
                        <image 
                            className='img-circle' 
                            xlinkHref={AnimeCropped} 
                            x='70' y="15" 
                            height="670" width="670"
                        />                        
                        <circle
                            className='circlehover' 
                            cx='350'
                            cy='350'
                            r='282'
                            fill='none'
                        />
                    </svg>
                </svg>

                {/* <h1 className='time'>00:25:00</h1> */}

                <h1 className='time'>
                    <span className='timer'>{this.props.timerMinute}</span>
                    <span className='timer'>:</span>
                    <span className='timer'>
                        {this.state.timerSecond === 0
                            ? "00"
                            : this.state.timerSecond < 10
                            ? "0" + this.state.timerSecond
                            : this.state.timerSecond
                        }
                    </span>
                </h1>

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

export default Circle;