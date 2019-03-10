import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingMessage from '../components/landing-Message';
import TopRatedBookCards from '../components/top-rated-book-card';

class Home extends Component {
    render() {
        return (

            <main>
                <div className="welcome-wrapper">
                    <LandingMessage message="Welcome to our book store">

                        <p>
                            <Link to="/store">Go To Store</Link>
                            <Link to="/orders">View your orders</Link>
                        </p>
                    </LandingMessage>
                    <TopRatedBookCards/>

                   
                </div>
            </main>

        );
    }
}

export default Home;