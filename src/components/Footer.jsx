import React from 'react';

const Footer = () => {

    const getFullYear = () => {
        const year = new Date().getFullYear();
    }

    return (
        <div className='footer'>
            <p>{getFullYear} © Copyright</p>
        </div>
    );
};

export default Footer;