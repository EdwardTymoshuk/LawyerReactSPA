import React from 'react';
import {CardGroup} from 'react-bootstrap';
import Case from './Case/Case';

const Cases = (props) => {
    return (
        <div>
            <CardGroup>
                <Case />
                <Case />
                <Case />
            </CardGroup>
        </div>
    )
        
    
}

export default Cases;