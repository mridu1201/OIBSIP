import React from 'react';

function Achievements() {
  return (
    <section className='achievements'>
      <h1>Achievements</h1>
      <div className='achievements-content'>
        
        <img className='col' src='https://i.pinimg.com/originals/7e/c7/e9/7ec7e97624f1bf820c33d8c6c57b9eae.jpg' alt='Taylor Swift with awards'  />
        <div className='awards-list'>
          <ul>
            <li>12 Grammy Awards (including three Album of the Year wins)</li>
            <li>1 Primetime Emmy Award</li>
            <li>40 American Music Awards (including Artist of the Decade – 2010s)</li>
            <li>40 Billboard Music Awards</li>
            <li>23 MTV Video Music Awards</li>
            <li>Eras Tour.</li>
            <li>Global Honours.</li>
            <li>Chart-Topping Domination.</li>
            <li>TIME's Person of the Year.</li>
            <li>The Eras Tour Movie. ...</li>
            <li>Personal Milestones. ...</li>
          </ul>
        </div>
        <img className='phd' src='https://i8.amplience.net/i/naras/TaylorSwift_NYU_GettyImages-1397957268' alt='Taylor Swift at NYU' height={300} />
      </div>
    </section>
  );
}

export default Achievements;
