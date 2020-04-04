import React from 'react';
import './App.css';
import Circle from './components/Circle';
import Welcome from './components/Welcome';
import Configuration from './components/Configuration';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      timerSecond: 0,
      isPlay: false,
    }

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  callbackFunction = (childData) => {
    this.setState({timerSecond: childData})
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      };
    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      };
    })
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      };
    })
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      };
    })
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {
    if(isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength,
      timerSecond: 0
    })
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }

  render() {
    return (
      <div className='container-fluid app-container'>
        <div className='row app-row'>
          <div className='col-6 app-col'>
            <Circle 
              timerMinute = {this.state.timerMinute}
              timerSecond = {this.state.timerSecond}
            />
          </div>
          <div className='col-6 app-col'>
            <Welcome />
            <Configuration
              isPlay={this.state.isPlay}
              onPlayStopTimer = {this.onPlayStopTimer}
              resetTimer = {this.onResetTimer}
              timerMinute = {this.state.timerMinute}
              timerSecond = {this.state.timerSecond}
              updateTimerMinute = {this.onUpdateTimerMinute}
              updateTimerSecond = {this.onUpdateTimerSecond}
              toggleInterval = {this.onToggleInterval}

              breakInterval = {this.state.breakLength} 
              increaseBreak = {this.onIncreaseBreakLength}
              decreaseBreak = {this.onDecreaseBreakLength}

              sessionLength = {this.state.sessionLength} 
              increaseSession = {this.onIncreaseSessionLength}
              decreaseSession = {this.onDecreaseSessionLength}

              parentCallback = {this.callbackFunction}
            />

          </div>
        </div>
      </div>
    );
  }

}

export default App;
