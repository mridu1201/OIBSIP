import React from 'react'
import YouTube from 'react-youtube';

function Journey() {
    const videoId = 'q07_k5VKuaQ';
    const opts = {
        height: '500',
        width: '1000',
        playerVars: {
          autoplay: 1,
        },
      };
  return (
    <section className='journey'>
        <h1>Journey</h1>
        <YouTube videoId={videoId} opts={opts} className='youtube'/>
    </section>
  )
}

export default Journey