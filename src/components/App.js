import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import List from './List';


const Header = () => (
  <header>
    <h1>Avatar: The Last Airbender</h1>
  </header>
);

const listInfo = [{
  name: 'JBJ',
  affiliation: 'Alchemy',
  photoURL: 'http://placebear.com/250/250'
}, {
  name: 'JBJ2',
  affiliation: 'Alchemy',
  photoURL: 'http://placebear.com/250/250'
}];

export default function App() {
  return (
    <Router>
      <Header />
      <List listItems={listInfo} />

    </Router>
  );
}
