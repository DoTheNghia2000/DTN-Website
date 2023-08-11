import { useEffect, useRef, useState } from 'react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.gif';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Portfolio = ({ valueScroll }) => {
   const [isItemMenu, setIsItemMenu] = useState('All');
   const [isHeight, setIsHeight] = useState(null);
   const [isValue, setIsValue] = useState(null);
   const [isStart, setIsStart] = useState(false);
   const Listref = useRef(null);

   const handleClickItem = (values) => {
      if (values === 'All')
         setIsItemMenu('All');

      if (values === 'WebTemplates')
         setIsItemMenu('WebTemplates');

      if (values === 'UIElements')
         setIsItemMenu('UIElements');

      if (values === 'Logos')
         setIsItemMenu('Logos');

      if (values === 'Drawings')
         setIsItemMenu('Drawings');

      const item = document.querySelectorAll('.box-content-list .item');
      let w = item[0].clientWidth;
      let h = item[0].clientHeight;
      let a = 0;
      let b = 0;
      let array = [];

      if (values === 'All') {
         for (let i = 1; i <= item.length; i++) {
            item[i - 1].classList.remove('hide');
            item[i - 1].style.position = 'absolute';
            item[i - 1].style.left = `${a * w}px`;
            item[i - 1].style.top = `${b * h}px`;
            if (i % isValue === 0) {
               a = 0;
               b++;
            } else {
               a++;
            }
         }
      }

      if (values === 'WebTemplates') {
         for (let i = 0; i < item.length; i++) {
            if (item[i].classList.contains('WebTemplates')) {
               array.push(i);
            } else {
               item[i].classList.add('hide');
            }
         }
         for (let i = 1; i <= array.length; i++) {
            item[array[i - 1]].classList.remove('hide');
            item[array[i - 1]].style.position = 'absolute';
            item[array[i - 1]].style.left = `${a * w}px`;
            item[array[i - 1]].style.top = `${b * h}px`;
            if (i % isValue === 0) {
               a = 0;
               b++;
            } else {
               a++;
            }
         }
      }

      if (values === 'UIElements') {
         for (let i = 0; i < item.length; i++) {
            if (item[i].classList.contains('UIElements')) {
               array.push(i);
            } else {
               item[i].classList.add('hide');
            }
         }
         for (let i = 1; i <= array.length; i++) {
            item[array[i - 1]].classList.remove('hide');
            item[array[i - 1]].style.position = 'absolute';
            item[array[i - 1]].style.left = `${a * w}px`;
            item[array[i - 1]].style.top = `${b * h}px`;
            if (i % isValue === 0) {
               a = 0;
               b++;
            } else {
               a++;
            }
         }
      }

      if (values === 'Logos') {
         for (let i = 0; i < item.length; i++) {
            if (item[i].classList.contains('Logos')) {
               array.push(i);
            } else {
               item[i].classList.add('hide');
            }
         }
         for (let i = 1; i <= array.length; i++) {
            item[array[i - 1]].classList.remove('hide');
            item[array[i - 1]].style.position = 'absolute';
            item[array[i - 1]].style.left = `${a * w}px`;
            item[array[i - 1]].style.top = `${b * h}px`;
            if (i % isValue === 0) {
               a = 0;
               b++;
            } else {
               a++;
            }
         }
      }

      if (values === 'Drawings') {
         for (let i = 0; i < item.length; i++) {
            if (item[i].classList.contains('Drawings')) {
               array.push(i);
            } else {
               item[i].classList.add('hide');
            }
         }
         for (let i = 1; i <= array.length; i++) {
            item[array[i - 1]].classList.remove('hide');
            item[array[i - 1]].style.position = 'absolute';
            item[array[i - 1]].style.left = `${a * w}px`;
            item[array[i - 1]].style.top = `${b * h}px`;
            if (i % isValue === 0) {
               a = 0;
               b++;
            } else {
               a++;
            }
         }
      }

   }

   useEffect(() => {
      let c;
      if (window.innerWidth > 992) {
         setIsValue(2);
         c = 2;
      } else {
         setIsValue(1);
         c = 1;
      }

      if (Listref.current) {
         const valueRef = Listref.current.getBoundingClientRect().height;
         async function setHeght() {
            await setIsHeight({ height: valueRef });
         }
         setHeght().then(() => {
            const item = document.querySelectorAll('.box-content-list .item');
            let w = item[0].clientWidth;
            let h = item[0].clientHeight;
            let a = 0;
            let b = 0;

            for (let i = 1; i <= item.length; i++) {
               item[i - 1].style.position = 'absolute';
               item[i - 1].style.left = `${a * w}px`;
               item[i - 1].style.top = `${b * h}px`;
               if (i % c === 0) {
                  a = 0;
                  b++;
               } else {
                  a++;
               }
            }
         })
      }
   }, [])

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
         const box_content = document.querySelectorAll('.box-content-list .item');

         for (let i = 0; i < box_content.length; i++) {
            if (box_content[i].classList.contains('scroll')) {
               box_content[i].classList.remove('scroll');
            }
         }
      }
   }, [valueScroll, isStart])

   return (
      <div className="Portfolio">
         <section className="elementor-section">
            <div className="elementor-container">
               <div className="box-content">
                  <div className="box-content_inner">
                     <ul className="list-menu">
                        <li className={`cursor  
                        ${(isItemMenu === 'All') ? 'active' : ''}`}
                           onClick={() => { handleClickItem("All") }}>All</li>
                        <li className={`cursor  
                        ${(isItemMenu === 'WebTemplates') ? 'active' : ''}`}
                           onClick={() => { handleClickItem("WebTemplates") }}>Web Templates</li>
                        <li className={`cursor 
                        ${(isItemMenu === 'UIElements') ? 'active' : ''}`}
                           onClick={() => { handleClickItem("UIElements") }}>UI Elements</li>
                        <li className={`cursor 
                        ${(isItemMenu === 'Logos') ? 'active' : ''}`}
                           onClick={() => { handleClickItem("Logos") }}>Logos</li>
                        <li className={`cursor  
                        ${(isItemMenu === 'Drawings') ? 'active' : ''}`}
                           onClick={() => { handleClickItem("Drawings") }}>Drawings</li>
                     </ul>
                  </div>
               </div>
               <div className="box-content-list" style={isHeight} ref={Listref}>
                  <div className={`item cursor WebTemplates`}>
                     <div className="item_inner cursor">
                        <img src={p1} alt="" />
                        <div className='p-100'></div>
                        <div className='desc'>
                           <h6>Flow Focus Sketch Design</h6>
                           <div className='button'>
                              <ArrowForwardIosIcon className='icon' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`item cursor Logos`}>
                     <div className="item_inner cursor">
                        <img src={p2} alt="" />
                        <div className='p-100'></div>
                        <div className='desc'>
                           <h6>Flow Focus Sketch Design</h6>
                           <div className='button'>
                              <ArrowForwardIosIcon className='icon' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`item cursor Logos scroll`}>
                     <div className="item_inner cursor">
                        <img src={p3} alt="" />
                        <div className='p-100'></div>
                        <div className='desc'>
                           <h6>Flow Focus Sketch Design</h6>
                           <div className='button'>
                              <ArrowForwardIosIcon className='icon' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`item cursor Logos scroll`}>
                     <div className="item_inner cursor">
                        <img src={p4} alt="" />
                        <div className='p-100'></div>
                        <div className='desc'>
                           <h6>Flow Focus Sketch Design</h6>
                           <div className='button'>
                              <ArrowForwardIosIcon className='icon' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`item cursor Drawings scroll`}>
                     <div className="item_inner cursor">
                        <img src={p5} alt="" />
                        <div className='p-100'></div>
                        <div className='desc'>
                           <h6>Flow Focus Sketch Design</h6>
                           <div className='button'>
                              <ArrowForwardIosIcon className='icon' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`item cursor WebTemplates scroll`}>
                     <div className="item_inner cursor">
                        <img src={p6} alt="" />
                        <div className='p-100'></div>
                        <div className='desc'>
                           <h6>Flow Focus Sketch Design</h6>
                           <div className='button'>
                              <ArrowForwardIosIcon className='icon' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`item cursor Logos scroll`}>
                     <div className="item_inner cursor">
                        <img src={p7} alt="" />
                        <div className='p-100'></div>
                        <div className='desc'>
                           <h6>Flow Focus Sketch Design</h6>
                           <div className='button'>
                              <ArrowForwardIosIcon className='icon' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`item cursor UIElements scroll`}>
                     <div className="item_inner cursor">
                        <img src={p8} alt="" />
                        <div className='p-100'></div>
                        <div className='desc'>
                           <h6>Flow Focus Sketch Design</h6>
                           <div className='button'>
                              <ArrowForwardIosIcon className='icon' />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Portfolio;