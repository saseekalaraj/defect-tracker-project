import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/containers/container';
import AppBar from './components/topBar/appBar';

function App() {
  return (
    <Fragment>
      <Container textAlign="right"/>
      <AppBar position='fixed' backgroundColor='32a852' />
    </Fragment>
  );
}

export default App;
