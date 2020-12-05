import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'

import PageRenderer from './pageRenderer'
import Navigation from './components/navigation'

function App() {

  const user = {
    firstName: 'Miguel',
    lastName: 'Coder'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
