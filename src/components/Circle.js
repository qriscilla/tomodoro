import React, {Component} from 'react';
import AnimeCropped from '../images/AnimeCropped.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { faPause } from '@fortawesome/free-solid-svg-icons';
// import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

class Circle extends Component {

    render() {
        return (
            <div className='circle'>

                <svg className='circle__svg1' height="670" width="670" >
                    <circle cx="350" cy="350" r="300" fill='none' stroke='white' strokeWidth='40' />
                    <circle className='circle__circle1' cx='350' cy='350' r='300' fill='none' stroke='black' strokeWidth='40' />
                    <svg className='circle__svg2' height='670' width='670' >
                        <image className='circle__image' xlinkHref={AnimeCropped} x='70' y="15" height="670" width="670" />                        
                        <circle className='circle__circle2' cx='350' cy='350' r='282' fill='none' />
                    </svg>
                </svg>

                <h1 className='circle__time'>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>
                        {this.props.timerSecond === 0
                            ? "00"
                            : this.props.timerSecond < 10
                            ? "0" + this.props.timerSecond
                            : this.props.timerSecond
                        }
                    </span>
                </h1>

            </div>
        );
    }
}

export default Circle;