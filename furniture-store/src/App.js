import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import createBrowserHistory from 'history/createBrowserHistory';

 import Create from './components/Create/Create';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      isAdmin: false,
      furnitures: [],
      history: createBrowserHistory(),
    }
    this.handleCreateFurniture = this.handleCreateFurniture.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleCreateFurniture(furniture) {
    fetch('http://localhost:9999/feed/furniture/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(furniture)
    }).then(responsive => responsive.json())
      .then(body => {
        if (!body.furniture) {
          toast.error(body.message);
        } else {
          this.setState(state => ({
            furnitures: [...state.furnitures, body.furnitures]
          }))
          this.state.history.push('/')
        }
      });
  }
 
  handleLogin(user) {
    fetch('http://localhost:9999/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json()).then(body => {
      if (!body.username) {
        toast.error(body.message);
      } else {
        this.setState({
          username: body.username,
          isAdmin: body.isAdmin
        });
        this.state.history.push('/');
        toast.success(body.message);
      }
    });
  }
  handleRegister(user) {
    fetch('http://localhost:9999/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json()).then(body => {
      if (!body.username) {
        toast.error(body.message);
      } else {
        this.setState({ username: body.username, isAdmin: body.isAdmin });
        this.state.history.push('/');
        toast.success(body.message);
      }
    });
  }
  handleLogout() {
    this.setState({
      username: null,
      isAdmin: false
    });
    this.state.history.push('/login');
    toast.success('Successfuly logout!');
  }

  render() {
    return (
      <div className="App">
        <Router history={this.state.history}>
          <Fragment>
             <Navbar handleLogout={this.handleLogout}{...this.state} /> 
            <ToastContainer autoClose={2500} hideProgressBar={true} closeButton={<span>&#120;</span>} />
            <Switch>
              <Route path='/' exact render={(props) => <Home {...props}{...this.state} />} />
              <Route path='/register' exact render={(props) => <Register {...props} handleRegister={this.handleRegister} />} />
              <Route path='/login' exact render={(props) => <Login {...props} handleLogin={this.handleLogin} />} />
              <Route path='/create' exact render={(props) => <Create {...props} handleCreateFurnitute={this.handleCreateFurnitute} />} />
              <Route render={() => <h1>Page not found.</h1>} />
            </Switch>
            <Footer/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
