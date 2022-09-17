import React from 'react'
import './Education.css'
import montfort from '../Images/montfort.png'
import odm from '../Images/odm.png'
import iter from '../Images/iter.png'
export default function Education() {
    return (
        <div className="educationpage">
            <div className='box'>
                <div className="card12">
                    <img src={iter} alt="" />
                    <p>Institution Name:ITER, SOA University</p>
                    <p>Location : Bhubneswar,Odisha</p>
                    <p>Year:2020-2024(Present)</p>
                </div>
                <div className="card12">
                    <img src={odm} alt="" />
                    <p>Institution Name: ODM Public School</p>
                    <p>Location : Bhubneswar,Odisha</p>
                    <p>Year:2018-2020</p>
                </div>
                <div className="card12">
                    <img src={montfort} alt="" />
                    <p>Institution Name: Montfort School</p>
                    <p>Location : Dhenkanal,Odisha</p>
                    <p>Year:2006-2018</p>
                </div>
            </div>
        </div>
    )
}
