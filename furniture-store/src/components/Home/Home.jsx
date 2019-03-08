import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            furnitures: this.props.furnitures,
            
        }
    }
}