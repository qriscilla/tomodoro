import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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

function Configuration(props) {

    function decreaseCounter() {
        if(props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if(props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }

    function decreaseSession() {
        if(props.sessionLength === 60) {
            return;
        }
        props.decreaseSession();
    }

    function increaseSession() {
        if(props.sessionLength === 1) {
            return;
        }
        props.increaseSession();
    }

    return(
        <div className='configuration'>
        
            <h5 style={{fontWeight: 'bold'}}>configuration</h5>

            <div className='configure'>
                <p className='configure__type'>Session Length</p>
                <button className='configure__remote' onClick={decreaseSession}>
                    <FontAwesomeIcon className='configure__remote__down' icon={faChevronUp} />
                </button>
                <p>{props.sessionLength} min</p>
                <button className='configure__remote' onClick={increaseSession}>
                    <FontAwesomeIcon className='configure__remote__up'  icon={faChevronUp} />
                </button>
            </div>

            <div className='configure'>
                <p className='configure__type'>Break Length</p>
                <button className='configure__remote' onClick={decreaseCounter}>
                    <FontAwesomeIcon className='configure__remote__down' icon={faChevronUp} />
                </button>
                <p>{props.breakInterval} min</p>
                <button className='configure__remote' onClick={increaseCounter}>
                    <FontAwesomeIcon className='configure__remote__up' icon={faChevronUp} />
                </button>
            </div>

        </div>
    );
}

export default Configuration;