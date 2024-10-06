import React, { useEffect, useRef } from 'react';
import './css/Hero.css';
import hero1 from '../assets/hero/hero_1.jpg';
import hero2 from '../assets/hero/hero_2.png';
import hero3 from '../assets/hero/hero_3.jpg';
import hero4 from '../assets/hero/hero_4.jpg';

const Hero = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const showSlider = (type, index = null) => {
      const sliderItemsDom = sliderRef.current?.querySelectorAll('.item');
      const thumbnailItemsDom = thumbnailBorderRef.current?.querySelectorAll('.item');

      if (!sliderItemsDom || !thumbnailItemsDom || !carouselRef.current) return;

      if (index !== null) {
        // Rearrange slider items when a thumbnail is clicked
        const clickedItem = sliderItemsDom[index];
        const clickedThumbnail = thumbnailItemsDom[index];

        sliderRef.current.insertBefore(clickedItem, sliderItemsDom[0]);
        thumbnailBorderRef.current.insertBefore(clickedThumbnail, thumbnailItemsDom[0]);
      } else if (type === 'next') {
        sliderRef.current.appendChild(sliderItemsDom[0]);
        thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
        carouselRef.current.classList.add('next');
      } else {
        sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselRef.current.classList.add('prev');
      }

      setTimeout(() => {
        carouselRef.current?.classList.remove('next');
        carouselRef.current?.classList.remove('prev');
      }, timeRunning);
    };

    const handleNext = () => showSlider('next');
    const handlePrev = () => showSlider('prev');

    if (nextRef.current && prevRef.current) {
      nextRef.current.addEventListener('click', handleNext);
      prevRef.current.addEventListener('click', handlePrev);
    }

    // Handle thumbnail clicks
    const handleThumbnailClick = (index) => {
      showSlider(null, index);
    };

    const thumbnails = thumbnailBorderRef.current?.querySelectorAll('.item');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => handleThumbnailClick(index));
    });

    // Auto-slide
    let runNextAuto = setInterval(handleNext, timeAutoNext);

    // Clean up event listeners and interval
    return () => {
      nextRef.current?.removeEventListener('click', handleNext);
      prevRef.current?.removeEventListener('click', handlePrev);
      thumbnails.forEach((thumbnail) => {
        thumbnail.removeEventListener('click', () => handleThumbnailClick());
      });
      clearInterval(runNextAuto);
    };
  }, [timeRunning, timeAutoNext]);

  return (
    <div className='h-full py-12'>
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          <div className="item">
            <img src={hero1} alt="Slider Image 1"/>
            <div className="content">
              <div className="author">STEMPEDE</div>
              <div className="title">LEARN</div>
              <div className="topic">TO BUILD</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SIGN UP</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={hero2} alt="Slider Image 2" />
            <div className="content">
              <div className="author">STEMPEDE</div>
              <div className="title">LEARN</div>
              <div className="topic">TO SOLVE</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={hero3} alt="Slider Image 3" />
            <div className="content">
              <div className="author">STEMPEDE</div>
              <div className="title">LEARN</div>
              <div className="topic">TO CREATE</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={hero4} alt="Slider Image 4" />
            <div className="content">
              <div className="author">STEMPEDE</div>
              <div className="title">LEARN</div>
              <div className="topic">TO CODE</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail" ref={thumbnailBorderRef}>
          <div className="item">
            <img src={hero1} alt="Thumbnail 1" />
          </div>
          <div className="item">
            <img src={hero2} alt="Thumbnail 2" />
          </div>
          <div className="item">
            <img src={hero3} alt="Thumbnail 3" />
          </div>
          <div className="item">
            <img src={hero4} alt="Thumbnail 4" />
          </div>
        </div>
        <div className="time" ref={timeRef}></div>
        <div id="prev" ref={prevRef}></div>
        <div id="next" ref={nextRef}></div>
      </div>
    </div>  
  );
};

export default Hero;