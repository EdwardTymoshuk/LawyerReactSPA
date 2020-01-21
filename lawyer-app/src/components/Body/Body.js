import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Body.css';

const Body = (props) => {
    return (
        <div>
            <div className="body-menu container-fluid">
                <div className="body-menu-cases">
                    <FontAwesomeIcon icon={faFileAlt} size="6x"/>
                </div>
                <div className="body-menu-add">
                    <FontAwesomeIcon icon={faPlus} size="6x"/>
                </div>
                <div className="body-menu-search">
                    <FontAwesomeIcon icon={faSearch} size="6x"/>
                </div>
            </div>
        </div>
    )
}

export default Body;