import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import socketIOClient from 'socket.io-client'

const ENDPOINT = 'http://localhost:5000'
const socket = socketIOClient(ENDPOINT);
import Chat from './pages/Chat'
import Home from './pages/Home'
function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home socket={socket} />
      </Route>
      <Route exact path="/chat">
        <Chat socket={socket} />
      </Route>
    </Router>
  );
}

export default App;
