import React from 'react'
import './PageHeader.css'


const PageHeader = (props) => {
    return (
        <header className="page-header">
        {props.header}
    </header>
    )
}

export default PageHeader