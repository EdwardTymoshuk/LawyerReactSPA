import React from 'react';
import './FormControls.css';
import {FormControl, FormText} from 'react-bootstrap';

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={`input ${hasError ? "error" : ''}`}>
            <FormControl  {...input} {...props}/>
            {hasError && <FormText className="text-muted">{meta.error}</FormText>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={`textarea${hasError ? "error" : ''}`}>
            <FormControl as="textarea" rows="5" {...input} {...props}/>
            {hasError && <FormText className="text-muted">{meta.error}</FormText>}
        </div>
    )
}