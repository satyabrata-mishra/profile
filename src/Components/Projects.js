import React from 'react'
import './Project.css'
import news from '../Images/news.png'
import todo from '../Images/todo.png'
import rps from '../Images/rps.png'
import ttt from '../Images/ttt.png'
import captcha from '../Images/captcha.png'
import numbersystem from '../Images/numbersystem.png'
import calculator from '../Images/calculator.png'
export default function Projects() {
    return (
        <div className='project'>
            <h2 className='projectheading'>PROJECTS</h2>
            <div className='projectbody'>
                <div className="projectbox">
                    <img src={news} alt="" />
                    <p>NEWS APP</p>
                    <a href="https://github.com/satyabrata-mishra/News-App" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={captcha} alt="" />
                    <p>CAPTCHA GENERATOR</p>
                    <a href="https://github.com/satyabrata-mishra/captcha-generator" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img className='imgnumbersystem' src={numbersystem} alt="" />
                    <p>NUMBER SYSTEM CONVERTER</p>
                    <a href="https://github.com/satyabrata-mishra/number-system-converter" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={calculator} alt="" />
                    <p>CALCULATOR</p>
                    <a href="https://github.com/satyabrata-mishra/Arithmetic-Calculator" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={rps} alt="" />
                    <p>ROCK PAPER SCISSOR</p>
                    <a href="https://github.com/satyabrata-mishra/Rock-Paper-Scissor-Game" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={ttt} alt="" />
                    <p>TIC TAC TOE</p>
                    <a href="https://github.com/satyabrata-mishra/tic-tac-toe" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={todo} alt="" />
                    <p>TO-DO-LIST</p>
                    <a href="https://github.com/satyabrata-mishra/TO-DO-List" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <p className='check'>FOR FURTHUR CHECK : <a className='check1' target={"_blank"} href="https://github.com/satyabrata-mishra?tab=repositories"><i className="fab fa-github"></i> GITHUB</a></p>
            </div>
        </div>
    )
}
