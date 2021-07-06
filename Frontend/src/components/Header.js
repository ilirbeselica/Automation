import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container">
            <nav style={{display: 'inline'}}>
                <Link to="/keyword"><h3 style={{display: 'inline', padding: '20px'}}>Keywords</h3></Link>
                <Link to="/wordpress"><h3 style={{display: 'inline'}}>Wordpress</h3></Link>
     
            </nav>
        </div>
    )
}

export default Header;