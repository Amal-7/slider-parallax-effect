import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import image1 from '../images/alberta-2297204_640.jpg'
import image2 from '../images/painting-mountain-lake-with-mountain-background_188544-9126.avif' 
import image3 from '../images/pure-nature-landscape-single-tree-in-green-field-free-photo.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

 const Slider = () => {


  const [parallaxSwiper, setParallaxSwiper] = useState(0);


  
const parallaxAmount = parallaxSwiper? parallaxSwiper.width * 0.95 : 0


  
  return (
    <>
    <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={500}
        slidesPerView={1}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        spaceBetween={0}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        // ref={swiperRef}
        // onSwiper={handleSwiper}
        getSwiper = {setParallaxSwiper}
        className="mySwiper h-[100vh]"
        
      >
        <div
          slot="container-start"
          className="parallax-bg"
      
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title h-[100%] w-[100%]" data-swiper-parallax={parallaxAmount} data-parallax-opacity={.5} style={{backgroundImage:`url(${image1})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
            Slide 1
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
          <div className="title h-[100%] w-[100%]" data-swiper-parallax={parallaxAmount} data-parallax-opacity={.5}  style={{backgroundImage:`url(${image2})` ,backgroundSize: 'cover',backgroundPosition: 'center' }}>
            Slide 2

          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className="title h-[100%] w-[100%]" data-swiper-parallax={parallaxAmount} data-parallax-opacity={.5}  style={{backgroundImage:`url(${image3})` ,backgroundSize: 'cover',backgroundPosition: 'center' }}>
            Slide 3

          </div>
         
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider