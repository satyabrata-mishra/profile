import React from 'react'
import './Intropage.css'
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import resume from "../pdf/Satyabrata's Resume.pdf";
import { Link } from 'react-router-dom';
export default function Intropage() {
    return (
        <>
            <div className="intropage">

                <p className="introline">SATYABRATA MISHRA</p>
                <p className="des">"Copy-and-Paste was programmed by programmers for programmers actually."</p>
                <p className="des">"It’s not a bug — it’s an undocumented feature."</p>
                <nav>
                    <Link to="education">EDUCATION <i className="fas fa-user-graduate"></i></Link>
                    <Link to="launguage">LAUNGUAGE PROFICENCY <i className="fas fa-code"></i></Link>
                    <Link to="projects">PROJECTS <i className="fas fa-project-diagram"></i></Link>
                    <Link to="blogs">BLOGS <i className="fas fa-blog"></i></Link>
                    <Link to="certifications">CERTIFICATIONS <i className="fas fa-certificate"></i></Link>
                    <a href={resume} download>RESUME <i className="fas fa-download"></i></a>
                    <Link to="contact">CONTACT <i className="fas fa-phone-alt"></i></Link>
                    <Link to="about">ABOUT <i className="fas fa-address-card"></i></Link>
                </nav>
                <div className="contact">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/satyabrata-mishra-52ab58218"><i className="fa fa-linkedin" style={{ fontSize: "2rem", color: "black" }}></i></a>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/s_.mishra"><i className="fa fa-instagram" style={{ fontSize: "2rem", color: "black" }}></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/satyabrata-mishra"><i className="fa fa-github" style={{ fontSize: "2rem", color: "black" }}></i></a>
                </div>
                <div className="contact">
                    <OverlayTrigger
                        placement={"top"}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                mishrasatyabrata27@gmail.com
                            </Tooltip>
                        }
                    >
                        {/* */}
                        <Button variant="transparent"><a rel="noreferrer" href="mailto: mishrasatyabrata27@gmail.com"><i className="fa fa-envelope" style={{ fontSize: "2rem", color: "black" }}></i></a></Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement={"top"}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                9348392756
                            </Tooltip>
                        }
                    >
                        <Button variant="transparent"><a rel="noreferrer" target="_blank" href="https://wa.me/919348392756?text=Can%20I%20have%20your%20valuable%20time?"><i className="fa fa-whatsapp" style={{ fontSize: "2rem", color: "black" }}></i> </a></Button>
                    </OverlayTrigger>
                </div>
                <div className="copy">&copy; 2022 SatyabrataMishra</div>
                <div className="footer">Last Updated: 17 September,2022 11:16 </div>
            </div>
        </>
    )
}