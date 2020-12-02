import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
