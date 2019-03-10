import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import WithAuthentication from '../hocs/with-user-authentication';

function AnonymousRoute(props) {
    const { isLoggedIn } = props.user;
    
    if(isLoggedIn) {
        return (<Redirect to="/" />);
    }

    return <Route {...props} />;
}

export default WithAuthentication(AnonymousRoute);