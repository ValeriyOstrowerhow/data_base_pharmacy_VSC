import React from "react";
import video_2024 from '../assets/video_2024.mp4'

const Main = () => {
    return (
      <div className='main'>
          <div className="overlay"></div>
          <video src={video_2024} autoPlay loop/>
          <div className="content">
              <h1>Welcome</h1>
              <p>To the Date Base "PHARMACY"</p>
          </div>
      </div>
    )
  }
  
  export default Main