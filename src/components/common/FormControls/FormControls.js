import React, { useState, useEffect } from 'react';
import './FormControls.css';
import {FormControl, FormText} from 'react-bootstrap';

import '../../common/DragDrop/DragDrop.css'
import { useDropzone } from 'react-dropzone'

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

export const FileInput = ({input, type, meta, ...props}) => {
    delete input.value

    return (
        <FormControl type="file"  {...input} {...props}/>
    )
}

export const DragDrop = ({input, meta, ...props}) => {

    const [files, setFiles] = useState([])
    const [value, setValue] = useState(input.value)
    const [onDragOver, setOnDragOver] = useState(false)


    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            let newFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
            setFiles([...files, ...newFiles])
            input.value = files
        },
        onDragOver: () => {
            setOnDragOver(true)
        },
        onDragLeave: () => {
            setOnDragOver(false)
        }
    })
    const thumbs = files.map(file => (
        <div className="drag-drop_thumb" key={file.name}>
            <div className="drag-drop_thumb-inner">
                <img
                    src={file.preview}
                    className="drag-drop_img-preview"
                />
            </div>
        </div>
    ));
    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className="drag-drop_container container">
            <aside {...getRootProps({ className: !onDragOver ? 'drag-drop_dropzone' : 'drag-drop_dropzone-hover' })}>
                <FormControl {...getInputProps()} as="input" {...props} />
                <p className="drag-drop_dropzone-p">Drag 'n' drop some files here, or click to select files</p>
            </aside>
            <aside className="drag-drop_thumbs-container">
                {thumbs}
            </aside>
        </section>
    )
}