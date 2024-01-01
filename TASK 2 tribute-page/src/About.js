import React from 'react'

function About() {
  return (
    <section className='about'>
        <h1>About</h1>
        <div className='about-contents'>
            <p>Embark on a musical odyssey through Taylor Swift's remarkable career, where each album unfolds as a chapter in her genre-defying journey. From the country charm of her debut to the fearless exploration of pop in "1989" and the edgier tones of "Reputation," Taylor's evolution is a testament to her artistic fearlessness. The recent indie-folk turn with "Folklore" and "Evermore" marks a return to her singer-songwriter roots, showcasing an intimate and contemplative side. Swift's ability to seamlessly traverse genres demonstrates not only her versatility but also her commitment to evolving as a musician, creating a rich tapestry of sound that mirrors the diverse chapters of her life and career.</p>
            <img className='about-image' src='https://res.cloudinary.com/dqpyrzzw7/image/upload/v1703526679/Taylor-Swift-removebg-preview_exwoq2.png' height={300} />
            
        </div>
    </section>
  )
}

export default About