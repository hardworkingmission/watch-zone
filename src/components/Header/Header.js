import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-2 text-white" to="/">Watch Zone</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link active fs-5 fw-bold text-white" aria-current="page" to="/watches">Watch</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Header;