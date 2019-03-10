import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import ProductService from '../../services/product';


class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = { products: null };
    }

    componentDidMount() {
        const productService = new ProductService();
        productService.getAll().then(body => {
            if (body.success) {
                this.setState({ products: body.produducts })
            } else {
                this.props.toast.error(body.message);
            }
        }).catch(error => {
            this.props.toast.error(error.message);
        });
    }
    render() {
        if (!this.props.user) {
            return <Redirect to="/" />
        }

        return (
            <div className="container">
                <h1>All Products</h1>
                <div className="row">
                    {
                        this.state.products && this.state.products.length > 0 ?
                            this.state.products.map(product => {
                                const nameLength = 30;
                                let slicedName = product.name.split('').slice(0, nameLength);
                                if (product.name.length > nameLength) {
                                    slicedName.push('...');
                                }

                                const descriptionLength = 80;
                                let slicedDescription = product.description.split('').slice(0, descriptionLength);
                                if (product.description.length > descriptionLength) {
                                    slicedDescription.push('...');
                                }

                                return (
                                    <div className="col-sm-6 col-md-3" key={product._id}>
                                        <div className="thumbnail">
                                            <img src={product.imageUrls[0]} alt={product.name} />
                                            <div className="caption">
                                                <h3>{slicedName.join('')}</h3>
                                                <p>{slicedDescription.join('')}</p>
                                                <p>
                                                    <Link to={`/products/${product._id}`} className="btn btn-primary" role="button">Details</Link>
                                                    <a href="#" className="btn btn-default" role="button">Unknown</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) :
                            <h3 className="text-center">Sorry, no devices to show.</h3>
                    }
                </div>
            </div>
        );
    }
}

export default AllProducts;



