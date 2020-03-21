import React, {Component} from 'react';

class Configuration extends Component {
    state = {
        seconds: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className='configuration'>
                <h5 style={{fontWeight: 'bold'}}>configuration</h5>
                <div className='configure'>
                    <span className='configure-left'># sessions</span>
                    <span className='configure-right'><input type='number'></input></span>
                </div>
                <div className='configure'>
                    <span className='configure-left'>session</span>
                    <span className='configure-right'>
                        <input 
                            type='number'
                            name='seconds'
                            value={this.state.seconds}
                            onChange={this.onChange}
                        >
                        </input>
                    </span>                
                </div>
                <input
                    type='submit'
                    value='Submit'
                />
                <div className='configure'>
                    <span className='configure-left'>short break</span>
                    <span className='configure-right'><input type='number'></input></span>
                </div>
                <div className='configure'>
                    <span className='configure-left'>long break</span>
                    <span className='configure-right'><input type='number'></input></span>
                </div>  
            </div>
        );
    }
}

export default Configuration;