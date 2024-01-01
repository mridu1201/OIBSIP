import React from 'react';

function Introduction() {
  return (
    <section className='introduction'>
      <video src="https://res.cloudinary.com/dqpyrzzw7/video/upload/v1703174372/1701932131382-ts-final-2_iyrtn0.mp4" loop muted autoPlay>
      </video>
      <div className='overlay'>
        <div className='text-overlay'>
          {/* <h1>This tribute page is for Taylor Alison Swift</h1> */}
          <img src='https://res.cloudinary.com/dqpyrzzw7/image/upload/v1703516086/cooltext449732424096010_n3bjuy.png'
          style={{
            marginTop:'400px'
          }}
          />
          <p>Taylor Swift, a global music sensation, has redefined genres with her compelling storytelling and chart-topping hits. Known for her authenticity, Swift seamlessly transitions from country to pop, captivating audiences worldwide. With 12 Grammy Awards and unwavering philanthropy, she continues to leave an indelible mark on the music industry and beyond.</p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
