import { useEffect, useState } from 'react';
import blog_1 from '../assets/blog-1.jpg';
import blog_2 from '../assets/blog-2.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Blog = ({ valueScroll }) => {
   const [isStart, setIsStart] = useState(false);

   useEffect(() => {
      setIsStart(true);
      return () => {
         setIsStart(false);
      }
   }, [])

   useEffect(() => {
      if (window.innerWidth > 992) {
         if (valueScroll > 0 && isStart) {
            const scrolls = document.querySelectorAll('.scroll');
            if (!scrolls[scrolls.length - 1].classList.contains('active')) {
               for (let i = 0; i < scrolls.length; i++) {
                  const elementRect = scrolls[i].getBoundingClientRect();
                  if (elementRect.top - (window.innerHeight - 100) < 0
                     && !scrolls[i].classList.contains('active')
                     && elementRect.top > 0) {
                     console.log(elementRect.top);
                     scrolls[i].classList.add('active');
                  }
               }
            }
         }
      } else {
         const box_content = document.querySelectorAll('.elementor-container .box-content');

         for (let i = 0; i < box_content.length; i++) {
            if (box_content[i].classList.contains('scroll')) {
               box_content[i].classList.remove('scroll');
            }
         }
      }
   }, [valueScroll, isStart])

   return (
      <div className="Blog">
         <section className="elementor-section categories">
            <div className="elementor-container">
               <div className="box-content">
                  <div className="box-content_inner">
                     <div className="tltle">
                        <h6>Design</h6>
                        <span>5</span>
                     </div>
                     <div className="divider"></div>
                     <div className="link cursor">
                        <span>READ PUBLICATIONS</span>
                        <ArrowForwardIcon className='icon' />
                     </div>
                  </div>
               </div>
               <div className="box-content">
                  <div className="box-content_inner">
                     <div className="tltle">
                        <h6>Events</h6>
                        <span>2</span>
                     </div>
                     <div className="divider"></div>
                     <div className="link cursor">
                        <span>READ PUBLICATIONS</span>
                        <ArrowForwardIcon className='icon' />
                     </div>
                  </div>
               </div>
               <div className="box-content">
                  <div className="box-content_inner">
                     <div className="tltle">
                        <h6>Nature</h6>
                        <span>2</span>
                     </div>
                     <div className="divider"></div>
                     <div className="link cursor">
                        <span>READ PUBLICATIONS</span>
                        <ArrowForwardIcon className='icon' />
                     </div>
                  </div>
               </div>
               <div className="box-content">
                  <div className="box-content_inner">
                     <div className="tltle">
                        <h6>Technology</h6>
                        <span>4</span>
                     </div>
                     <div className="divider"></div>
                     <div className="link cursor">
                        <span>READ PUBLICATIONS</span>
                        <ArrowForwardIcon className='icon' />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="elementor-section newest">
            <div className='elementor-container'>
               <div className="box-title">
                  <h5 className="title-section">
                     <span>Employment History</span>
                     <span data-number="01"></span>
                  </h5>
               </div>
               <div className='box-content scroll'>
                  <div className='box-content_inner'>
                     <img src={blog_1} alt="" />
                     <div className='text'>
                        <p>DESIGN, TECHNOLOGY</p>
                        <h5>Why You Should Take Care Your Brand.</h5>
                        <div className='divider'></div>
                        <p>SEPTEMBER 24, 2020 - ADMIN</p>
                     </div>
                  </div>
               </div>
               <div className='box-content scroll'>
                  <div className='box-content_inner'>
                     <img src={blog_2} alt="" />
                     <div className='text'>
                        <p>DESIGN, TECHNOLOGY</p>
                        <h5 className='cursor'>Minimalism has reached a certain.</h5>
                        <div className='divider'></div>
                        <p>SEPTEMBER 24, 2020 - ADMIN</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Blog