import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Welcome
            </Link>
            <Link to="/events" className="item">
                Events
            </Link>
        </div>
    );
};

export default Header;
