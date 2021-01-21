import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'

import Navigation from './components/navigation'


import Algos from './pages/algorithms'
import Cloud from './pages/cloud'
import Home from './pages/home'
import Health from './pages/health'
import Login from './pages/login'
import Brainhacking from './pages/brainhacking'
import PostViewer from './pages/post-viewer'
import WebDev from './pages/web-dev'

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
          <Route path='/algorithms' component={Algos} />
          <Route path='/cloud' component={Cloud} />
          <Route path='/health' component={Health} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/brainhacking' component={Brainhacking} />
          <Route path='/post-viewer/:id' component={PostViewer} />
          <Route path='/webdev' component={WebDev} />
          {/* <Route path="/:page" component={PageRenderer} /> */}
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
