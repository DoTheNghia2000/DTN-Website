import icon_1 from '../assets/icon-1.svg';
import icon_2 from '../assets/icon-2.svg';
import icon_3 from '../assets/icon-3.svg';
import icon_4 from '../assets/icon-4.svg';
import blog_1 from '../assets/blog-1.jpg';
import blog_2 from '../assets/blog-2.jpg';
import icon_1w from '../assets/icon-1w.svg';
import icon_2w from '../assets/icon-2w.svg';
import icon_3w from '../assets/icon-3w.svg';
import icon_4w from '../assets/icon-4w.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper } from './'
import { useContext, useState, useEffect } from 'react';
import { DarkModeContext } from '../context/ModuleContext';

const Home = ({ valueScroll }) => {
   const [isStart, setIsStart] = useState(false);

   const { darkMode } = useContext(DarkModeContext);

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
      <div className="Home">

         <section className="elementor-section my-popular">
            <div className="elementor-container">
               <div className="box-content">
                  <div className="box-content_inner">
                     <p className="number">74 <span className="symbol">+</span></p>
                     <div className="divider"></div>
                     <p className="text">COMPLETED <br />PROJECTS</p>
                  </div>
               </div>
               <div className="box-content">
                  <div className="box-content_inner">
                     <p className="number">50 <span className="symbol">+</span></p>
                     <div className="divider"></div>
                     <p className="text">HAPPY <br />CUSTOMERS</p>
                  </div>
               </div>
               <div className="box-content">
                  <div className="box-content_inner">
                     <p className="number">14 <span className="symbol">+</span></p>
                     <div className="divider"></div>
                     <p className="text">HONORS AND <br />AWARDS</p>
                  </div>
               </div>
            </div>
         </section>

         <section className="elementor-section my-story">
            <div className="elementor-container">
               <div className="box-title">
                  <h5 className="title-section">
                     <span>My story</span>
                     <span data-number="01"></span>
                  </h5>
               </div>
               <div className="box-content">
                  <div className='box-content_inner'>
                     <p>
                        Consectetur adipisicing elit. Rem minima maiores, praesentium,
                        aperiam eveniet tenetur consequatur beatae id est.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="elementor-section my-services">
            <div className="elementor-container">
               <div className="box-title">
                  <h5 className="title-section">
                     <span>My Services</span>
                     <span data-number="02"></span>
                  </h5>
               </div>
               <div className="box-content scroll">
                  <div className='box-content_inner'>
                     <div className='icon'>
                        {
                           darkMode
                              ? (<img src={icon_1w} alt="" />)
                              : (<img src={icon_1} alt="" />)
                        }
                     </div>
                     <h6 className='title'>
                        <span>Architecture</span>
                     </h6>
                     <div className='desc'>
                        <p>Dolor sit amet, consectetur adipisicing elit. Delectus esse commodi.</p>
                     </div>
                     <div className='link cursor'>
                        <span>ORDER NOW</span>
                        <ArrowForwardIcon className='symbol' />
                     </div>
                  </div>
               </div>
               <div className="box-content scroll">
                  <div className='box-content_inner'>
                     <div className='icon'>
                        {
                           darkMode
                              ? (<img src={icon_2w} alt="" />)
                              : (<img src={icon_2} alt="" />)
                        }
                     </div>
                     <h6 className='title'>
                        <span>UI/UX Design</span>
                     </h6>
                     <div className='desc'>
                        <p>Dolor sit amet, consectetur adipisicing elit. Delectus esse commodi.</p>
                     </div>
                     <div className='link cursor'>
                        <span>ORDER NOW</span>
                        <ArrowForwardIcon className='symbol' />
                     </div>
                  </div>
               </div>
               <div className="box-content scroll">
                  <div className='box-content_inner'>
                     <div className='icon'>
                        {
                           darkMode
                              ? (<img src={icon_3w} alt="" />)
                              : (<img src={icon_3} alt="" />)
                        }
                     </div>
                     <h6 className='title'>
                        <span>Interior Design</span>
                     </h6>
                     <div className='desc'>
                        <p>Dolor sit amet, consectetur adipisicing elit. Delectus esse commodi.</p>
                     </div>
                     <div className='link cursor'>
                        <span>ORDER NOW</span>
                        <ArrowForwardIcon className='symbol' />
                     </div>
                  </div>
               </div>
               <div className="box-content scroll">
                  <div className='box-content_inner'>
                     <div className='icon'>
                        {
                           darkMode
                              ? (<img src={icon_4w} alt="" />)
                              : (<img src={icon_4} alt="" />)
                        }
                     </div>
                     <h6 className='title'>
                        <span>Game Design</span>
                     </h6>
                     <div className='desc'>
                        <p>Dolor sit amet, consectetur adipisicing elit. Delectus esse commodi.</p>
                     </div>
                     <div className='link cursor'>
                        <span>ORDER NOW</span>
                        <ArrowForwardIcon className='symbol' />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="elementor-section price-plans">
            <div className='elementor-container'>
               <div className="box-title">
                  <h5 className="title-section">
                     <span>Price plans</span>
                     <span data-number="03"></span>
                  </h5>
               </div>
               <div className='box-content scroll'>
                  <div className='box-content_inner popular'>
                     <h6 className='title'>
                        <span>Hourly Payment</span>
                     </h6>
                     <div className='number'>
                        <sup><span>$</span></sup>
                        <span> 29 </span>
                        <sup><span>h</span></sup>
                     </div>
                     <div className='divider'></div>
                     <ul className='list'>
                        <li>AMET LOREM</li>
                        <li>DOLOR IPSUM</li>
                        <li className='light'>SIT AMET</li>
                        <li className='light'>LOREM DOLOR</li>
                     </ul>
                     <div className='link cursor btn'>
                        <span>ORDER NOW</span>
                        <ArrowForwardIcon className='symbol' />
                     </div>
                  </div>
               </div>
               <div className='box-content scroll'>
                  <div className='box-content_inner'>
                     <h6 className='title'>
                        <span>Full Time</span>
                     </h6>
                     <div className='number'>
                        <sup><span>$</span></sup>
                        <span> 2999 </span>
                        <sup><span>h</span></sup>
                     </div>
                     <div className='divider'></div>
                     <ul className='list'>
                        <li>AMET LOREM</li>
                        <li>DOLOR IPSUM</li>
                        <li>SIT AMET</li>
                        <li>LOREM DOLOR</li>
                     </ul>
                     <div className='link cursor btn'>
                        <span>ORDER NOW</span>
                        <ArrowForwardIcon className='symbol' />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="elementor-section testimonials">
            <div className='elementor-container'>
               <div className="box-title">
                  <h5 className="title-section">
                     <span>Price plans</span>
                     <span data-number="04"></span>
                  </h5>
               </div>
               <div className='box-content scroll'>
                  <div className='box-content_inner'>
                     <Swiper />
                  </div>
               </div>
            </div>
         </section>

         <section className="elementor-section latest-publications">
            <div className='elementor-container'>
               <div className="box-title">
                  <h5 className="title-section">
                     <span>Latest Publications</span>
                     <span data-number="05"></span>
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

export default Home