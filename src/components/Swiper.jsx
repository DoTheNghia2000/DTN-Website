import review1 from '../assets/review-1.jpg';
import review2 from '../assets/review-2.jpg';
import review3 from '../assets/review-3.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from 'react';

const Swiper = () => {
   const [transform, setTransform] = useState(null);

   useEffect(() => {
      const swiperSlides = document.querySelectorAll('.swiper-slide');
      const back = document.getElementById('backSwiper');
      const next = document.getElementById('nextSwiper');
      let valueLength = swiperSlides.length;
      let i = 0;
      let j;

      if(window.innerWidth > 992){
         for(let i=0;i<swiperSlides.length;i++){
            if(i>1){
               
               swiperSlides[i].classList.add('hide');
            }
         }
         j=2;
      }else{
         for(let i=0;i<swiperSlides.length;i++){
            if(i>0){
               swiperSlides[i].classList.add('hide');
            }
         }
         j=1;
      }

      const BackSwiper = () => {
         if (valueLength < swiperSlides.length) {
            next.classList.remove('hide');
            i -= 1;
            swiperSlides[i].classList.remove('hide');
            swiperSlides[i+j].classList.add('hide');
            valueLength += 1;
            setTransform({ transform: `translate3d(-${i * 380}px, 0, 0)` });
            if(i === 0){
               back.classList.add('hide');
            }
         }
      }

      const NextSwiper = () => {
         if (valueLength - j > 0) {
            back.classList.remove('hide');
            swiperSlides[i].classList.add('hide');
            swiperSlides[i+j].classList.remove('hide');
            i += 1;
            valueLength -= 1;
            setTransform({ transform: `translate3d(-${i * 380}px, 0, 0)` });
            if(valueLength - j === 0){
               next.classList.add('hide');
            }
         }
      }

      back.addEventListener('click', BackSwiper);
      next.addEventListener('click', NextSwiper);

      return () => {
         back.removeEventListener('click', BackSwiper);
         next.removeEventListener('click', NextSwiper);
      }
   }, []);

   return (
      <div className="swiper-container">
         <div className='swiper-wrapper' style={transform}>
            <div className='swiper-slide'>
               <div className='swiper-slide_inner'>
                  <div className="author">
                     <img src={review1} alt="" />
                     <h6><span>Paul Freeman</span></h6>
                     <i><span>Interior designer</span></i>
                  </div>
                  <div className="text">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente
                        vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.
                     </p>
                  </div>
               </div>
            </div>
            <div className='swiper-slide'>
               <div className='swiper-slide_inner'>
                  <div className="author">
                     <img src={review2} alt="" />
                     <h6><span>Oscar Oldman</span></h6>
                     <i><span>Photographer</span></i>
                  </div>
                  <div className="text">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente
                        vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.
                     </p>
                  </div>
               </div>
            </div>
            <div className='swiper-slide'>
               <div className='swiper-slide_inner'>
                  <div className="author">
                     <img src={review3} alt="" />
                     <h6><span>Viktoria Newman</span></h6>
                     <i><span>Model</span></i>
                  </div>
                  <div className="text">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, debitis minus repellat saepe? Deleniti blanditiis optio inventore nulla dicta fugiat culpa quis unde, sequi debitis ex ab! Sapiente
                        vitae rem tempore sunt! Aperiam eveniet mollitia, quae architecto nostrum.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className='swiper-navigation'>
            <div>
               <div className='back cursor hide' id='backSwiper'>
                  <ArrowBackIcon className='icon' />
               </div>
            </div>
            <div>
               <div className='next cursor' id='nextSwiper'>
                  <ArrowForwardIcon className='icon' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Swiper;