import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnonymousRoute from './components/AnonymousRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';

import {
  defaultAuthenticationContext, 
  AuthenticationProvider } 
  from './components/contexts/authentication-context';


import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Logout from './components/logout';
import Create from './components/Create/Create';

import './App.css';
import Header from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';

class App extends Component {
  constructor(props){
    super(props);
    const userFromStorage = window.localStorage.getItem('user');
    const parseUser = userFromStorage ? JSON.parse(userFromStorage) : {};
    
    this.state={
      user: {
        ...defaultUserState,
        ...parseUser,
        updateUser:this.updateUser,
      },
    }
  }
  
updateUser = (user) => {
  this.setState({user});
}
  render() {
    const { user } = this.state;
    return (
      <Router>
        <Fragment>
         <UserProvider value={user}>
         <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <AuthorizeRoute path='/create' component={Create} allowedRoles={['Admin']} />
            <AuthorizeRoute path='/logout' component={Logout}/>
            <Route component={NotFound} />
          </Switch>
          <Footer />
         </UserProvider>
        </Fragment>
      </Router>
    );
  }
}

export default App;
