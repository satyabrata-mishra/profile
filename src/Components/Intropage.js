import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intropage.css'
import linkedin from '../Images/link.png'
import insta from '../Images/instagram.png'
import github from '../Images/github.png'
import contact from '../Images/contact.png'
import gmail from '../Images/gmail.png'
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
export default function Intropage() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            mishrasatyabrata27@gmail.com
        </Tooltip>)
    const renderTooltip1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            9348392756
        </Tooltip>
    );
    return (
        <>
            <div className="intropage">
                <p className="introline">Hi There,  I Am  S Mishra.</p>
                <div className="contact">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/satyabrata-mishra-52ab58218"><img src={linkedin} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/s_.mishra"><img src={insta} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/satyabrata-mishra"><img src={github} alt="" /></a>
                </div>
                <br />
                <div className="contact">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 0, hide: 0 }}
                        overlay={renderTooltip}
                    >
                        <Button variant="light"><img src={gmail} alt="" /></Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 0, hide: 0}}
                        overlay={renderTooltip1}
                    >
                        <Button variant="light"><img src={contact} alt="" /></Button>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    )
}