import React, {Component} from 'react';
// import Anime from '../images/Anime.jpeg';
import AnimeCropped from '../images/AnimeCropped.png';


class Circle extends Component {
    render() {
        return (
            <div>
                <img className='img-circle' src={AnimeCropped} alt={AnimeCropped}></img>
                {/* <svg height="500" width="500">
                    <circle cx="250" cy="250" r="200" stroke="black" stroke-width="5" fill="none">
                    </circle>
                </svg> */}
            </div>
        );
    }
}

export default Circle;