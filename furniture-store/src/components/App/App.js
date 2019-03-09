import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Create from '../Create/Create';
import Navbar from '../common/Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../common/Footer/Footer';
import NotFound from '../NotFound/NotFound';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      isAdmin: false,
      products: [],
      
    }
    this.handleCreateProduct = this.handleCreateProduct.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleCreateProduct(product) {
    fetch('http://localhost:9999/feed/products/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(responsive => responsive.json())
      .then(body => {
        if (!body.product) {
          toast.error(body.message);
        } else {
          this.setState(state => ({
            products: [...state.products, body.product]
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
  componentWillMount() {
    // check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)
    const localUserName = localStorage.getItem('username');
    if (localUserName) {
        this.setState({
            username:localUserName
        })
    }

    //  fetch all the games
    this.fetchProducts();
}
fetchProducts(){
  fetch('http://localhost:9999/feed/products')
  .then(res=> res.json())
  .then(body => this.setState({
      products:body.products,
      
    }))
    
  
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
              <Route component={NotFound} />
            </Switch>
            <Footer/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
