import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Body.css';
import {NavLink} from 'react-router-dom';

const Body = (props) => {
    return (
        <div>
            <div className="body-menu container-fluid">
                <div className="body-menu-cases">
                    <NavLink to="/cases">
                        <FontAwesomeIcon icon={faFileAlt} size="10x"/>
                    </NavLink>                  
                </div>
                <div className="body-menu-add">
                <NavLink to="/add">
                    <FontAwesomeIcon icon={faPlus} size="10x"/>
                    </NavLink>
                </div>
                <div className="body-menu-search">
                <NavLink to="/search">
                    <FontAwesomeIcon icon={faSearch} size="10x"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Body;