import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import Inquiries from './Components/Inquiries'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/inquiries' component={Inquiries} />
    </div>
  );
}

export default App;
