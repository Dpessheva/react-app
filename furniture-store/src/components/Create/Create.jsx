import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type: '',
          description: '',
          imageUrl: '',
          price: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        //this.props.handleCreateProduct(this.state);
    }

    render() {
        return (
            <div className="Create">
                <h1>Create product </h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" value={this.state.type} placeholder="Text" onChange={this.handleChange} />
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={this.state.description} placeholder="Text" onChange={this.handleChange} />
                    <label htmlFor="imageUrl">imageUrl</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl}
                        placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzg6o0KjhufKFU1iBNr1zuyi0YDNgCUw4Ky5SNATZDVKaIUkiAA" onChange={this.handleChange} />
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" value={this.state.price} placeholder="0.00 euro" onChange={this.handleChange} />
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}
export default Create;