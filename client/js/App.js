import PropTypes from 'prop-types';
import React from 'react';
import { createStore } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import ACTIONS from './actions/index';
import INITIAL_STATE from './reducer/initialState';

import reducer from './reducer/index';

import Navigation from './components/navigation/navigation';
import Login from './components/login/login';
import Register from './components/register/register';
import NotFound from './components/404';

// const store = createStore(reducer, INITIAL_STATE);

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: 'Hello World'
};

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <HashRouter>
        <div>
          <h1>demo app</h1>
          <Navigation />
          <Switch>
            <Route path='/' component={Login} exact />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
