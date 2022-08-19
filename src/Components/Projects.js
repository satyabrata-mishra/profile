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
import chatroom from '../Images/chatroom.png'
import spotify from '../Images/spotify.png'

export default function Projects() {
    return (
        <div className='project'>
            <h2 className='projectheading'>PROJECTS</h2>
            <div className='projectbody'>
                <a className="projectbox" href='https://chatroom0.netlify.app/' rel="noreferrer" target={"_blank"}>
                    <img src={chatroom} alt="Unable to load." />
                    <p>CHATROOM</p>
                </a>
                <a className="projectbox" href='https://github.com/satyabrata-mishra/News-App' rel="noreferrer" target={"_blank"}>
                    <img src={news} alt="Unable to load." />
                    <p>NEWS APP</p>
                </a>
                <a className="projectbox" href='https://spotify-clone000.netlify.app/' rel="noreferrer" target={"_blank"}>
                    <img src={spotify} alt="Unable to load." />
                    <p>SPOTIFY CLONE</p>
                </a>
                <a className="projectbox" href="https://github.com/satyabrata-mishra/weatherapp" rel="noreferrer" target={"_blank"}>
                    <img src={weatherapp} alt="Unable to load." />
                    <p>WEATHER APP</p>
                </a>
                <a className="projectbox" href="https://github.com/satyabrata-mishra/currencyconverter.github.io" rel="noreferrer" target={"_blank"}>
                    <img src={currencyconverter} alt="Unable to load." />
                    <p>CURRENCY CONVERTER</p>
                </a>
                <a className="projectbox" href="https://github.com/satyabrata-mishra/captcha-generator" rel="noreferrer" target={"_blank"}>
                    <img src={captcha} alt="Unable to load." />
                    <p>CAPTCHA GENERATOR</p>
                </a>
                <a className="projectbox" href="https://github.com/satyabrata-mishra/number-system-converter" rel="noreferrer" target={"_blank"}>
                    <img className='imgnumbersystem' src={numbersystem} alt="Unable to load." />
                    <p>NUMBER SYSTEM CONVERTER</p>
                </a>
                <a className="projectbox" href="https://github.com/satyabrata-mishra/Rock-Paper-Scissor-Game" rel="noreferrer" target={"_blank"}>
                    <img src={rps} alt="Unable to load." />
                    <p>ROCK PAPER SCISSOR</p>
                </a>
                <a className="projectbox" href="https://github.com/satyabrata-mishra/tic-tac-toe" rel="noreferrer" target={"_blank"}>
                    <img src={ttt} alt="Unable to load." />
                    <p>TIC TAC TOE</p>
                </a>
                <p className='check'>FOR FURTHUR CHECK : <a className='check1' target={"_blank"} rel="noreferrer" href="https://github.com/satyabrata-mishra?tab=repositories"><i className="fab fa-github"></i> GITHUB</a></p>
            </div>
        </div>
    )
}