import React, { useState, useEffect } from 'react'
import './DragDrop.css'
import { useDropzone } from 'react-dropzone'

const DragDrop = (field) => {

    const [files, setFiles] = useState([]);
    const [onDragOver, setOnDragOver] = useState(false)
    

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            let newFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
            setFiles([...files, ...newFiles])
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
                <input {...getInputProps()} type="file" />
                <p className="drag-drop_dropzone-p">Drag 'n' drop some files here, or click to select files</p>
            </aside>
            <aside className="drag-drop_thumbs-container">
                {thumbs}
            </aside>
        </section>
    )
}

export default DragDrop