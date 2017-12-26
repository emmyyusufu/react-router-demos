import React, { Component } from 'react';
import '../styles/App.css';

// import route Components here


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><a href="">Hello</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Books</a></li>
            </ul>
            <hr/>
            {/* Routes will go here */}
          </div>
        </div>
      </Router>
    );
  }
}
export default App;