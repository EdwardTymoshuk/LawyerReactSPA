import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = (props) => {
    return (
            <div className="container-fluid header">
                <button type="button" className="btn btn-link btn-lg header-button">
                    <FontAwesomeIcon icon={faPowerOff} size="2x" />
                </button>
            </div>
    )
}

export default Header;