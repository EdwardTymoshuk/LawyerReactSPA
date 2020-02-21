import React from 'react';
import preloader from '../../assets/images/preloader.svg';

const Preloader = (props) => {
    return (
        <div className="preloader">
            <img alt="preloader" src={preloader} />
        </div>
    )
}

export default Preloader;