import React from 'react'
import './Certification.css'
import hashcode from '../Images/googlehashcode.png'
import chugncode from '../Images/Chug_n_Code_Certificate.png'
import chugncodepdf from '../pdf/Chug_n_Code_Certificate_pdf.pdf'
import tataforage from '../Images/tata_forage.png'
import publicis_sapient from '../Images/publicis_sapient.png'


export default function Certification() {
  return (
    <div className='certificationbody'>
      <div className='certificates'>
        <img src={tataforage} alt="Unable to load." />
        <p>Completed Data Visaualisation:Empowering Business with Effective Insights.</p>
        <a href={tataforage} download>DOWNLOAD <i className="fas fa-download"></i></a>
      </div>
      <div className='certificates'>
        <img src={publicis_sapient} alt="Unable to load." />
        <p>Participated in JumpStart by Publicis Sapient.</p>
        <a href={publicis_sapient} download>DOWNLOAD <i className="fas fa-download"></i></a>
      </div>
      <div className='certificates'>
        <img src={hashcode} alt="Unable to load." />
        <p>Participated in Google HashCode 2022</p>
        <p>Global Rank-2621</p>
        <p>All India Rank-992</p>
        <a href={hashcode} download>DOWNLOAD <i className="fas fa-download"></i></a>
      </div>
      <div className='certificates'>
        <img src={chugncode} alt="Unable to load." />
        <p>Participated on Chug 'n' Code By Codex</p>
        <a href={chugncodepdf} download>DOWNLOAD <i className="fas fa-download"></i></a>
      </div>
    </div>
  )
}