import React from 'react'
import './Project.css'
import news from '../Images/news.png'
import todo from '../Images/todo.png'
import rps from '../Images/rps.png'
export default function Projects() {
    return (
        <>
            <h2 className='pro'>PROJECTS</h2>
            <div className="flex1">
                <div className='projectcard'>
                    <img src={news} alt="" />
                    <p>NEWS WEBSITE</p>
                    <a href="https://github.com/satyabrata-mishra/News-App">VIEW REPO</a>
                </div>
                <div className='projectcard'>
                    <img src={todo} alt="" />
                    <p>TODO LIST</p>
                    <a href="https://github.com/satyabrata-mishra/TO-DO-List">VIEW REPO</a>
                </div>
                <div className='projectcard'>
                    <img src={rps} alt="" />
                    <p>ROCK PAPER SCISSOR GAME</p>
                    <a href="https://github.com/satyabrata-mishra/Rock-Paper-Scissor-Game">VIEW REPO</a>
                </div>
            </div>
        </>
    )
}
