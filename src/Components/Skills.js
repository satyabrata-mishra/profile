import React from 'react'
import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap'
export default function Skills() {
    return (
        <>
            <h2 className='skil'>Launguages Known</h2>
            <div className='progbar'>
                <ProgressBar label=" JAVA 70%" variant='success' now={70} />
                <br />
                <ProgressBar label="PYTHON 50%" variant='success' now={50} />
                <br />
                <ProgressBar label="NODE JS 40%" variant='success' now={40} />
                <br />
                <ProgressBar label="REACT JS 50%" variant='success' now={50} />
            </div>
        </>
    )
}
