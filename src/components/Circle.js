import React, {Component} from 'react';
import AnimeCropped from '../images/AnimeCropped.png';


class Circle extends Component {
    render() {
        return (
            <div>
                <svg height="670" width="670">
                    <circle cx="350" cy="350" r="300" stroke="black" stroke-width="5" fill="none" />
                    <image className='img-circle' xlinkHref={AnimeCropped} x='75.5' y="15" height="670" width="670"/>
                </svg>
            </div>
        );
    }
}

export default Circle;