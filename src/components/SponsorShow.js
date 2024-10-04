import React from 'react'
import './css/SponsorShow.css'
import collections from '../assets/products/collections';

const Hero = () => {
    const importAll = (r) => r.keys().map(r);
    const slider1Images = importAll(require.context('../assets/images', false, /slider1_\d+\.png$/));
    const slider2Images = importAll(require.context('../assets/images', false, /slider2_\d+\.jpg$/));
  return (
    <div className='py-10'>
        <div className="slider" reverse="true" style={{'--width': '100px','--height': '100px','--quantity': '10',}}>
            <div className="list">
                {slider1Images.map((src, index) => (
                    <div key={index} className="item" style={{ '--position': index + 1 }}>
                    <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>
                ))}
            </div>
        </div>

        <div className="slider" reverse="true" style={{'--width': '200px','--height': '200px','--quantity': '10',}}>
            <div className="list">
                {collections.map((product, index) => (
                    <a href={`/product/${product.id}`}>
                        <div key={product.id} className="item" style={{ '--position': index + 1 }}>
                            <img src={product.image} alt={`Product ${product.id + 1}`} />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hero