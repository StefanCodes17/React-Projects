import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import socketIOClient from 'socket.io-client'
import UserProvider from './UserContext'

import Chat from './pages/Chat'
import Home from './pages/Home'

const ENDPOINT = 'http://localhost:5000'
const socket = socketIOClient(ENDPOINT);
function App() {
  return (
    <UserProvider>
      <Router>
        <Route exact path="/">
          <Home socket={socket} />
        </Route>
        <Route exact path="/chat">
          <Chat socket={socket} />
        </Route>
      </Router>
    </UserProvider>
  );
}

export default App;
