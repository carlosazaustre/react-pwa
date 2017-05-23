import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <p className="App-intro">
      This is the {title} page.
    </p>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/about">About</Link></p>
    <p><Link to="/settings">Settings</Link></p>
  </div>
);

const Home = (props) => (
  <Page title="Home"></Page>
);

const About = (props) => (
  <Page title="About"></Page>
);

const Settings = (props) => (
  <Page title="Settings"></Page>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/settings" component={Settings}></Route>
      </Router>
    );
  }
}

export default App;
