import './App.css';

import { Switch, Route } from 'react-router-dom'

import Organizer from './pages/Organizer';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import UserForm from './pages/UserForm'
import ErrorPage from './pages/ErrorPage'

import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Home />
          </Route>
          <Route path='/user/signup'>
            <UserForm />
          </Route>
          <Route path='/organizer/:id'>
            <Navbar />
            <Organizer />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
