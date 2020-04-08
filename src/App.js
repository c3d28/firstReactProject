import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
class App extends React.Component {
  render() {
    return (
      <Welcome name="Jackson" />
    );
  }
}

export default App;
