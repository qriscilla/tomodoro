import React, {Component} from 'react';
import Tomato from '../images/Tomato.png';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to <img className='welcome__tomato' src={Tomato} alt={Tomato}></img> tomodoro</h1>
                <p className='welcome__p'>To get started, configure your timer here.</p>
            </div>
        );
    }
}

export default Welcome;