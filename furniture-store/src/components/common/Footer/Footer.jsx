import React from 'react';
import './Footer.css';

const Footer = ()=> {

    return(
        <footer id="footer" className="page-footer mt-4">
         © The Furniture Store {new Date().getFullYear()}
        
        </footer>
    );

}

export default Footer;