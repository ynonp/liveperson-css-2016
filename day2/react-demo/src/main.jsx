import Counter from './counter';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (<div>
    <Counter />
    <hr />
    <Counter start="2" />
    <Counter start="5" />
    <Counter />
  </div>);
}

const main = document.querySelector('main');
ReactDOM.render(<App />, main);
