import React from 'react'
import './css/SponsorShow.css'
import collections from '../assets/products/collections';

const SponsorShow = () => {
    const importAll = (r) => r.keys().map(r);
    const slider1Images = importAll(require.context('../assets/images', false, /slider1_\d+\.png$/));
    const slider2Images = importAll(require.context('../assets/images', false, /slider2_\d+\.jpg$/));
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
                <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
            ))}
            </div>
        </div>

        <div className="slider" reverse="true" style={{'--width': '200px','--height': '200px','--quantity': '12',}}>
                <div className="list">
                {collections.map((product) => (
                    <div key={product.id} className="item" style={{ '--position': product.id }}>
                        <a href={`/product/${product.id}`}>
                            <img src={product.image} alt={`Product ${product.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                        </a>
                    </div>
                ))}
                </div>
            </div>
    </div>
  )
}

export default SponsorShow