import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import './footer.css';
import Discription from './Discription';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Discription/>
       <Footer/>
      </div>
    );
  }
}

export default App;
