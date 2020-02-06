import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import List from './List';
import Character from './Character';
import avatarLogo from '../assets/avatar-logo.png';
import './App.css';


const Header = () => (
  <header>
    <img src={avatarLogo} />
  </header>
);



export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={List} />
        <Route path='/character/:_id' component={Character} />
      </Switch>
    </Router>
  );
}
