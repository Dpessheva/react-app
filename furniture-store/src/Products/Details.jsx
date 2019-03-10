import React, { Component } from 'react';
import ProductService from '../../services/product';

const imageStyle = {
  maxWidth: '350px',
  maxHeight: '350px',
};

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  componentDidMount() {
    const productService = new ProductService();
    productService.getById(this.props.match.params.id).then(body => {
      if (body.success) {
        this.setState({ product: body.product });
      } else {
        this.props.toast.success(body.message)
      }
    }).catch(error => {
      this.props.toast.error(error.message);
    });
  }

  render() {
    if (!this.state.product) {
      return <div className="container"></div>;
    }

    const product = this.state.product;
    return (
      <div className="container">
        <h1>Type: {product.type}</h1>
        <h3>Description:</h3>
        <p>{product.description}</p>
        <h3>Characteristics:</h3>
        <ul>
          {product.characteristics.map((c, i) => (<li key={`${product._id}characteristic${i}`}>{c}</li>))}
        </ul>
        <p>Price: ${product.price}</p>
        <small>Quantity: {product.quantity}</small> <br />
        {product.imageUrls.map((img, i) => (<img src={img} key={`${product._id}image${i}`} style={imageStyle} alt={product.type} />))}
      </div>
    );
  }
}

export default ProductDetails;