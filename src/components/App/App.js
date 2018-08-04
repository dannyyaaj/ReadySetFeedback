import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import FeelingView from '../FeelingView/FeelingView';
import ComprehensionView from '../ComprehensionView/ComprehensionView';
import SupportView from '../SupportView/SupportView';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import Header from '../Header/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <Switch>
            <Redirect exact from="/" to="/1" />
            <Route exact path="/1" component={FeelingView} />
            <Route exact path="/2" component={ComprehensionView} />
            <Route exact path="/3" component={SupportView} />
            <Route component={ErrorNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
