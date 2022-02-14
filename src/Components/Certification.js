import React from 'react'
import './Certification.css'
import certificate from '../Images/certificate.png'
export default function Certification() {
  return (
    <div className='certificationbody'>
      <div className='certificates'>
        <img src={certificate} alt="" />
        <p>Certificate for course of web development.</p>
        <p>Starting date-</p>
        <p>Completion date-</p>
        <a href={certificate} download>DOWNLOAD <i className="fas fa-download"></i></a>
      </div>
    </div>
    )
  }