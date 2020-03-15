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
import styles from './App.css';


const Header = () => (
  <header>
    <a href='/'><img src={avatarLogo} /></a>
  </header>
);



export default function App() {
  return (
    <Router>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.theRest}>
        <Switch>
          <Route exact path='/' component={List} />
          <Route path='/character/:id' component={Character} />
        </Switch>
      </div>
    </Router>
  );
}
