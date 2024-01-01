import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
    const website=()=>{
        window.open("https://www.taylorswift.com/","_blank")
    }
    const eras=()=>{
        window.open("https://tstheerastour.taylorswift.com/","_blank")
    }
    const wiki=()=>{
        window.open("https://en.wikipedia.org/wiki/Taylor_Swift","_blank")
    }
    const ig=()=>{
        window.open("https://www.instagram.com/taylorswift/","_blank")
    }
    const fb=()=>{
        window.open("https://www.facebook.com/TaylorSwift","_blank")
    }
    const yt=()=>{
        window.open("https://www.youtube.com/@TaylorSwift","_blank")
    }
    const rt=()=>{
        window.open("https://www.reddit.com/r/TaylorSwift/","_blank")
    }
    const tt=()=>{
        window.open("https://www.tiktok.com/@taylorswift?lang=en","_blank")
    }
    const x=()=>{
        window.open("https://twitter.com/taylorswift13","_blank")
    }
  return (
    <section className='learnmore'>
        <h1>Learn More</h1>
        <div className='links'>
            <button onClick={website}>Website</button>
            <button onClick={eras}>Eras Tour</button>
            <button onClick={wiki}>Wikipedia</button>
        </div>
        <p className='social-mediap'>Social Media</p>
        <div className='social-media'>
            <FaYoutube className='uicons'/>
            <AiFillInstagram className='iicons'/>
            <FaSquareFacebook className='ficons'/>
            <BsTwitterX className='xicons'/>
            <FaTiktok className='ticons'/>
            <FaRedditAlien className='ricons'/>
        </div>       
        <p className='social-mediae'>by Mridini Shankar 2023</p> 
    </section>
  )
}

export default Footer