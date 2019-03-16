import React  from 'react';


const Footer = ()=> {

    return (

       <footer id="footer" className="page-footer mt-4">
       © Book Library {new Date().getFullYear()}
       </footer>

    );

}

export default Footer;