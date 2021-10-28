import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './components/pages/About';
import NotMatch from './components/pages/NotMatch';
import NavBar from './components/NavBar';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="container">

            <TodoContainer />
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
}
