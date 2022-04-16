import './style.css';
import React from 'react';
 import imagesrc from "./images/imageInSrc.jpg";
 import ReactPlayer from 'react-player'

const divStyle = {
  border: 'solid 1px black',
  maxwidth: '100vw',
};
function App() {
  return (
    <div className="App">
     <div style={divStyle}>

<h1 className="title red">Sioud Daly</h1>

<div className="images">
  <img className='image' src={imagesrc} alt="imageinsrc" /> 
  <img className='image' src="/imageInPublic.jpg" alt="imageinpub" />
</div>

</div>

  <ReactPlayer url="https://www.youtube.com/watch?v=IKXJWTj-2Yc&ab_channel=georgep577"/>




    </div>
  )
}

export default App;
