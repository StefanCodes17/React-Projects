import './App.css';

import { Switch, Route } from 'react-router-dom'

import Organizer from './pages/Organizer';
import Home from './pages/Home'
import Navbar from './components/Navbar'

import FormModal from './components/FormModal'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/organizer/:id'>
          <Organizer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
