import React from 'react'
import './css/SponsorShow.css'

const Hero = () => {
    const importAll = (r) => r.keys().map(r);
    const slider1Images = importAll(require.context('../assets/images', false, /slider1_\d+\.png$/));
    const slider2Images = importAll(require.context('../assets/images', false, /slider2_\d+\.jpg$/));
    // const heroImages = importAll(require.context('../assets/hero', false, /hero_\d+\.jpg$/));
  return (
    <div className='py-10'>
        {/* <div className='hero-container'>
            <div className='hero-image'>
            {heroImages.map((src, index) => (
                <div key={index} className="item" style={{ '--position': index + 1 }}>
                <img src={src} alt={`Slide ${index + 1}`} />
                </div>
            ))}
            </div>
        </div> */}
        <div className="slider" style={{'--width': '100px','--height': '50px','--quantity': '10',}}>
            <div className="list">
            {slider1Images.map((src, index) => (
                <div key={index} className="item" style={{ '--position': index + 1 }}>
                <img src={src} alt={`Slide ${index + 1}`} />
                </div>
            ))}
            </div>
        </div>

        <div className="slider" reverse="true" style={{'--width': '200px','--height': '200px','--quantity': '9',}}>
            <div className="list">
            {slider2Images.map((src, index) => (
                <div key={index} className="item" style={{ '--position': index + 1 }}>
                <img src={src} alt={`Slide ${index + 1}`} />
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Hero