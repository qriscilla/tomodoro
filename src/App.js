import React from 'react';
import './App.css';
import Circle from './components/Circle';
import Welcome from './components/Welcome';
import Configuration from './components/Configuration';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          <Circle />
        </div>
        <div className='col-6'>
          <Welcome />
          <Configuration />
        </div>
      </div>
    </div>
  );
}

export default App;
