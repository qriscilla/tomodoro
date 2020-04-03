import React, {Component} from 'react';
import AnimeCropped from '../images/AnimeCropped.png';

class Circle extends Component {

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
                <h1 className='time'>00:25:00</h1>
            </div>
        );
    }
}

export default Circle;