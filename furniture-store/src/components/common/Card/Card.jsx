import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import WithAuthentication from '../../../hocs/with-user-authentication';

const Card = ({imageUrl , type , description, id, price, user}) => {

    return (
        <div className="card col-4">
        <img className="card-img-top card-image"
         src={imageUrl}
            alt="product"
             />
            <div className="card-body">
                <h5 className="card-type">{type}</h5>
                 <p className="card-text">{description} </p>
                 <p className="card-price">{price} </p>

            </div>
            <div className="card-footer">
            <small className="text-muted"></small>
                <Link 
                type="button" className="btn btn-primary float-right btn-sm"
                to={`/product/details/${id}`}>Details</Link>
                {
                        user.isAdmin
                        ?
                        <Fragment>
                            <Link to={`/product/edit/${id}`} className="waves-effect waves-light btn orange lighten-1 custom-btn">Edit</Link>
                            <Link to={`/product/delete/${id}`} className="waves-effect waves-light btn red lighten-1 custom-btn">Delete</Link>
                        </Fragment>
                        : null
                    }
                 <button 
                type="button" className="btn btn-warning float-right btn-sm">Order</button>
                </div>
        </div>

    );
}

export default WithAuthentication(Card);