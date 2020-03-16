import React, {Component} from 'react';
import Anime from '../images/Anime.jpeg';


class Circle extends Component {
    render() {
        return (
            <div>
                <svg height="300" width="300">
                    <circle cx="150" cy="150" r="100" stroke="black" stroke-width="3" fill={Anime} />
                </svg>
            </div>
        );
    }
}

export default Circle;