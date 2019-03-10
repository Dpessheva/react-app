import React, { Component } from 'react';
import { AuthenticationConsumer } from '../../components/contexts/authentication-context';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
          return (
                <header>
                      <NavLink exact to="/" className="logo">The furniture store</NavLink>
                      <div className="header-right">
                            <NavLink exact to="/">Home</NavLink>
                            {this.props.username ? 
                           (<span>
                            <Link to="/login">Welcome {this.props.username}!</Link>
                           {
                                 this.props.isAdmin ? 
                                 ( <NavLink to="/create">Create</NavLink>) 
                                 : 
                                 null
                                }
                             {/* {
                                        this.props.user.isLoggedIn
                                        ? <li className={findActive}><NavLink to="/find" onClick={this.handleClick}>Find Your Pet</NavLink></li>
                                        : null
                            } */}
                           <Link to="/logout">Logout</Link>
                          
                            </span>)
                            :
                           (<span><NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                            </span>)
                       }
                            
                            </div>
                </header>
          );
    }
}

function LoginWithAuthorization(props) {
  return (
      <AuthenticationConsumer>
          {
              (data) => (<NavBar {...data} {...props}/>)
          }
      </AuthenticationConsumer>
  );
}

export default LoginWithAuthorization;