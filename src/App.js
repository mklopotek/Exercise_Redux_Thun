import React, { Component } from 'react';
import Users from './views/Users'
import Auth from './components/Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Users /> */}
        <Auth />
      </div>
    );
  }
}

export default App;
