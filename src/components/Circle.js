import React, {Component} from 'react';
import AnimeCropped from '../images/AnimeCropped.png';


class Circle extends Component {
    render() {
        return (
            <div className='circle'>
                <svg height="670" width="670">
                    <circle cx="350" cy="350" r="300" fill='none' stroke='white' strokeWidth='40' />
                    <circle className="progress__value" cx='350' cy='350' r='300' fill='none' stroke='black' strokeWidth='40' />
                    <image className='img-circle' xlinkHref={AnimeCropped} x='70' y="15" height="670" width="670" />
                </svg>
            </div>
        );
    }
}

export default Circle;