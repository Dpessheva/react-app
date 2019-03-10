import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../../services/authenticationService';
import { UserConsumer} from '../contexts/authentication-context';


class Login extends Component {
  static service = new AuthenticationService();
    state = {
        email: '',
        password: '',
        error: '',
        

    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,

        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const { updateUser } =this.props;
 
        const credentials = {
            email,
            password
        }
 
        this.setState({
            error: '',
        }, async () => {
            try {
                const result = await Login.service.login(credentials);

                if (!result.success) {
                    const errors = Object.values(result.errors).join('');

                    throw new Error(errors);

                }
                window.localStorage.setItem('auth_token', result.token);
                // to set the user in the localstorage
                window.localStorage.setItem('user' , JSON.stringify({
                    ...result.user,
                    isLoggedIn:true
            }));
                updateUser({
                    isLoggedIn: true,
                    ...result.user,
                });
            } catch (error) {
                this.setState({
                    error: error.message,
                })
            }
        }
        )


    }

  render() {
    const { email, password, error } = this.state;
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
        return (
            <Redirect to='/' />
        )
    }

    return (
      <div className="container">
        <div className="col-md-6">
          <h1>Login Form</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <span className="input-group-addon" id="email-addon">Email</span>
              <input type="email" name="email" className="form-control" placeholder="Email" aria-describedby="email-addon" onChange={this.handleChange} />
            </div>
            <div className="input-group">
              <span className="input-group-addon" id="password-addon">Password</span>
              <input type="password" name="password" className="form-control" placeholder="Password" aria-describedby="password-addon" onChange={this.handleChange} />
            </div>
            <div className="input-group">
              <input type="submit" className="btn btn-default" value="Log In" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;