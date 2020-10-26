import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import ListItems from './components/ListItems';
import Login from './components/Login';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Compare from './components/Compare';
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

function SignedInRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !localStorage.getItem('logged') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
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
            <SignedInRoute path="/login">
              <Login />
            </SignedInRoute>
            <Route path="/" exact component={ListItems}  />
            <PrivateRoute path="/cart" exact>
              <Cart />
            </PrivateRoute>
            <PrivateRoute path="/compare" exact>
              <Compare />
            </PrivateRoute>
            <PrivateRoute path="/:id" exact>
              <Detail />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ItemProvider>
  );
}

export default App;
