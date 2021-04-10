import React from 'react';
import { Provider } from 'react-redux';
import PizzaHut from './components/PizzaHut';
import {store} from './redux/Store.js';

function App() {
  return (
    <div className="App">
    <div className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container">
        <span className="navbar-brand">React Redux</span>
      </div>
    </div>
    
    <Provider store={store}>
    <PizzaHut/>
    </Provider>
    
    </div>
  );
}

export default App;

