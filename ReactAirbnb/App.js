/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Navigation from "./src/navigation"
import reducers from "./src/reducers"
import React, { Component } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducers, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Navigation />
      </Provider>
    );
  }
}
export default App;
