import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            furnitures: this.props.furnitures,
            description:null,
        }
        this.handleWiewDescription = this.handleWiewDescription.bind(this);
    }
    componentDidMount(){
        fetch('http://localhost:9999/feed/furnitures')
        .then(response => response.json())
        .then(body => {
            if (body.furnitures) {
                this.setState({movies:body.furnitures});
            }
        });
    }
    handleWiewDescription(index){
        this.setState(state => ({description:state.furnitures[index]}))
    }
    render() {
        return (
          <div className="Home">
            <div className="Home">
                <h1>All furnitures</h1>
               {
                  this.state.description ?
                    <span>
                      <h2>{this.state.description.title}</h2>
                      <p>{this.state.description.description}</p>
                    </span> : null
                }
                <ul className="furnitures">
                {
                  this.state.furnitures.map((x, i) => (
                    <li className="furniture" key={x._id}>
                      <h2>{x.title}</h2>
                      <img src={x.imageUrl} alt={x.title} />
                      {
                        this.props.username ?
                          <span>
                            <button onClick={() => this.handleWiewDescription(i)}>View description</button>
                          </span> :
                          null
                      }
                    </li>
                ))}
                </ul>
              </div>
          </div>
        );
      }
}

export default Home;