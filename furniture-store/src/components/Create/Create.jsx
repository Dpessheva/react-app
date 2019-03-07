import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
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
        this.props.handleCreateFurniture(this.state);
    }

    render() {
        return (
            <div className="Create">
                <h1>Create new furniture offer </h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="title">Title</label>
                    <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.handleChange} />
                    <label for="type">Type</label>
                    <input type="text" name="type" value={this.state.type} placeholder="Text" onChange={this.handleChange} />
                    <label for="description">Description</label>
                    <input type="text" name="description" value={this.state.description} placeholder="Text" onChange={this.handleChange} />
                    <label for="imageUrl">imageUrl</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl}
                        placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzg6o0KjhufKFU1iBNr1zuyi0YDNgCUw4Ky5SNATZDVKaIUkiAA" onChange={this.handleChange} />
                    <label for="price">Price</label>
                    <input type="text" name="price" value={this.state.price} placeholder="0,00" onChange={this.handleChange} />
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}
export default Create;