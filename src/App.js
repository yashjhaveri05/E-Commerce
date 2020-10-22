import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import ListItems from './components/ListItems';
import Login from './components/Login';
import Detail from './components/Detail';
import {ItemProvider} from './components/ItemContext';
import Navbar from './components/Navbar';

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('logged') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App(){
  return (
    <ItemProvider>
      <Router>
        <div className="App">
        <Navbar />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={ListItems}  />
            <PrivateRoute path="/:id">
              <Detail />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ItemProvider>
  );
}

export default App;
