import React from 'react'
import './About.css'
import iter from '../Images/satyabrata.jpg'
export default function About() {
    return (
        <div className='aboutbody'>
            <div className="aboutme">
                <img src={iter} alt=""/>
                <p>Hi, I am Satyabrata Mishra. I am a Bhubaneswar based passionate programmer. I am on my journey to be a full time software developer. I have always been someone who has both a creative and logical side. I'am a fast learner, able to pick up new skills and perform different roles with relative ease. I am fueled up high energy levels and enthusiasm which helps me in pursuit of my interest, hobbies and other endeavours.</p>
            </div>
        </div>
    )
}