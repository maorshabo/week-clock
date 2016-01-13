import './app.scss';
import '../node_modules/animate.css/animate.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock/Clock';
import Beach from './components/beach/Beach';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Beach />
      <div className="app">
        <Clock />
      </div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
