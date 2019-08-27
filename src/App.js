import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    < React.Fragment >
      <NavBar />
    </React.Fragment>
  );
}

export default App;

ReactDOM.render(<NavBar />, document.querySelector('#root'));
