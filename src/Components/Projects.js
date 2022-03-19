import React from 'react'
import './Project.css'
import news from '../Images/news.png'
import todo from '../Images/todo.png'
import rps from '../Images/rps.png'
import ttt from '../Images/ttt.png'
import captcha from '../Images/captcha.png'
import numbersystem from '../Images/numbersystem.png'
import calculator from '../Images/calculator.png'
import currencyconverter from '../Images/currencyconverter.png'
import weatherapp from '../Images/weatherapp.png'
export default function Projects() {
    return (
        <div className='project'>
            <h2 className='projectheading'>PROJECTS</h2>
            <div className='projectbody'>
                <div className="projectbox">
                    <img src={news} alt="Unable to load." />
                    <p>NEWS APP</p>
                    <a href="https://github.com/satyabrata-mishra/News-App" rel="noreferrer" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={weatherapp} alt="Unable to load." />
                    <p>WEATHER APP</p>
                    <a href="https://satyabrata-mishra.github.io/weatherapp" rel="noreferrer" target={"_blank"}>VIEW WEBSITE</a>
                </div>
                <div className="projectbox">
                    <img src={currencyconverter} alt="Unable to load." />
                    <p>CURRENCY CONVERTER</p>
                    <a href="https://satyabrata-mishra.github.io/currencyconverter.github.io" rel="noreferrer" target={"_blank"}>VIEW WEBSITE</a>
                </div>
                <div className="projectbox">
                    <img src={captcha} alt="Unable to load." />
                    <p>CAPTCHA GENERATOR</p>
                    <a href="https://github.com/satyabrata-mishra/captcha-generator" rel="noreferrer" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img className='imgnumbersystem' src={numbersystem} alt="Unable to load." />
                    <p>NUMBER SYSTEM CONVERTER</p>
                    <a href="https://github.com/satyabrata-mishra/number-system-converter" rel="noreferrer" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={calculator} alt="Unable to load." />
                    <p>CALCULATOR</p>
                    <a href="https://github.com/satyabrata-mishra/Arithmetic-Calculator" rel="noreferrer" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={rps} alt="Unable to load." />
                    <p>ROCK PAPER SCISSOR</p>
                    <a href="https://github.com/satyabrata-mishra/Rock-Paper-Scissor-Game" rel="noreferrer" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={ttt} alt="Unable to load." />
                    <p>TIC TAC TOE</p>
                    <a href="https://github.com/satyabrata-mishra/tic-tac-toe" rel="noreferrer" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <div className="projectbox">
                    <img src={todo} alt="Unable to load." />
                    <p>TO-DO-LIST</p>
                    <a href="https://github.com/satyabrata-mishra/TO-DO-List" rel="noreferrer" target={"_blank"}>VIEW PROJECT</a>
                </div>
                <p className='check'>FOR FURTHUR CHECK : <a className='check1' target={"_blank"} rel="noreferrer" href="https://github.com/satyabrata-mishra?tab=repositories"><i className="fab fa-github"></i> GITHUB</a></p>
            </div>
        </div>
    )
}
