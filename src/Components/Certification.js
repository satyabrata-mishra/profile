import React from 'react'
import './Certification.css'
import hashcode from '../Images/hashcode.png'
export default function Certification() {
  return (
    <div className='certificationbody'>
      <div className='certificates'>
        <img src={hashcode} alt="Unable to load." />
        <p>Participated in Google HashCode 2022</p>
        <p>Global Rank-2621</p>
        <p>All India Rank-992</p>
        <a href={hashcode} download>DOWNLOAD <i className="fas fa-download"></i></a>
      </div>
    </div>
    )
  }