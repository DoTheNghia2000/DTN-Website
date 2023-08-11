import { useEffect, useRef, useState } from "react";


const Resume = () => {
   const [valueHeight1, setValueHeight1] = useState(0);
   const [valueHeight2, setValueHeight2] = useState(0);
   const [isHeght, setHeight] = useState(null);
   const heightRef = useRef();

   useEffect(() => {
      const bar_progress = document.querySelectorAll('.my-skill .bar-progress_inner');
      const bar_process = document.querySelectorAll('.bar-process');
      const box_overlay = document.querySelectorAll('.history .box-overlay');
      const numberCount = document.querySelectorAll('.my-skill .box-content_inner .title span')

      if (heightRef.current) {
         const valueRef = heightRef.current.getBoundingClientRect().height;
         async function setValue() {
            await setHeight(valueRef);
         }
         setValue().then(() => {
            for (let i = 1; i < box_overlay.length; i++) {
               box_overlay[i].style.display = 'none';
            }
         })
      }

      const timeOut = setTimeout(() => {
         for (let i = 0; i < bar_progress.length; i++) {
            const value = bar_progress[i].getAttribute('data-value');
            let j = 0;
            const Animation = () => {
               j++;
               const count = Math.min(j, value);
               bar_progress[i].style.width = `${count}%`;
               numberCount[i].innerHTML = `${count}%`;
               if (j !== value)
                  setTimeout(()=>{
                     window.requestAnimationFrame(Animation);
                  },10)
            }
            window.requestAnimationFrame(Animation);
         }
      }, 1500)

      for (let i = 0; i < bar_process.length; i++) {
         const parent = bar_process[i].parentElement;

         for (let j = 0; j < box_overlay.length; j++) {
            if (box_overlay[j].parentElement === parent) {
               const mark = box_overlay[j].children[1];
               if (j + 1 === box_overlay.length) {
                  mark.onclick = () => {
                     let height = 0;
                     height += box_overlay[j].children[2].clientHeight - 20;
                     if (i === 0) {
                        setValueHeight1(prev => prev += height);
                     }
                     if (i === 1) {
                        setValueHeight2(prev => prev += height);
                     }
                     box_overlay[j].children[2].classList.add('active');
                     box_overlay[j].children[0].classList.remove('puls');
                     mark.onclick = null;
                  }
               } else if (box_overlay[j] === parent.lastChild) {
                  mark.onclick = () => {
                     let height = 0;
                     height += box_overlay[j].children[2].clientHeight - 20;
                     if (i === 0) {
                        setValueHeight1(prev => prev += height);
                     }
                     if (i === 1) {
                        setValueHeight2(prev => prev += height);
                     }
                     setTimeout(() => {
                        box_overlay[j + 1].style.display = 'block';
                        box_overlay[j + 1].children[1].style.animation = `scale .5s ease-in-out`;
                        box_overlay[j + 1].children[0].classList.add('puls');
                     }, 500)
                     box_overlay[j].children[2].classList.add('active');
                     box_overlay[j].children[0].classList.remove('puls');
                     mark.onclick = null;
                  }
               } else {
                  mark.onclick = () => {
                     let height = 0;
                     height += box_overlay[j].children[2].clientHeight + 40;
                     if (i === 0) {
                        setValueHeight1(prev => prev += height);
                     }
                     if (i === 1) {
                        setValueHeight2(prev => prev += height);
                     }
                     setTimeout(() => {
                        box_overlay[j + 1].style.display = 'block';
                        box_overlay[j + 1].children[1].style.animation = `scale .5s ease-in-out`;
                        box_overlay[j + 1].children[0].classList.add('puls');
                     }, 500)
                     box_overlay[j].children[2].classList.add('active');
                     box_overlay[j].children[0].classList.remove('puls');
                     mark.onclick = null;
                  }
               }

            }
         }

      }

      return () => {
         clearTimeout(timeOut);
      }
   }, [])

   return (
      <div className="Resume">
         <section className="elementor-section my-skill">
            <div className="elementor-container">
               <div className="box-content">
                  <div className="box-content_inner">
                     <div className="item">
                        <div className="title">
                           <h6>Html</h6>
                           <span>0%</span>
                        </div>
                        <div className="bar-progress">
                           <div className="bar-progress_inner" data-value="100"></div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="title">
                           <h6>CSS</h6>
                           <span>0%</span>
                        </div>
                        <div className="bar-progress">
                           <div className="bar-progress_inner" data-value="100"></div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="title">
                           <h6>SCSS</h6>
                           <span>0%</span>
                        </div>
                        <div className="bar-progress">
                           <div className="bar-progress_inner" data-value="80"></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="box-content">
                  <div className="box-content_inner">
                     <div className="item">
                        <div className="title">
                           <h6>Javascript</h6>
                           <span>0%</span>
                        </div>
                        <div className="bar-progress">
                           <div className="bar-progress_inner" data-value="90"></div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="title">
                           <h6>jQuery</h6>
                           <span>0%</span>
                        </div>
                        <div className="bar-progress">
                           <div className="bar-progress_inner" data-value="70"></div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="title">
                           <h6>ReactJS</h6>
                           <span>0%</span>
                        </div>
                        <div className="bar-progress">
                           <div className="bar-progress_inner" data-value="70"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="elementor-section history" style={{ height: `${isHeght}px` }}>
            <div className="elementor-container" ref={heightRef}>
               <div className="box-title">
                  <h5 className="title-section">
                     <span>Employment History</span>
                     <span data-number="01"></span>
                  </h5>
               </div>
               <div className="box-content">
                  <div className="bar-process" style={{ height: `${valueHeight1}px` }}></div>
                  <div className="box-overlay">
                     <div className="mark puls"></div>
                     <div className="mark_inner cursor"></div>
                     <div className="box-content_inner">
                        <h6>HO CHI MINH CITY INSTITUTE OF APPLIED
                           SCIENCE AND TECHNOLOGY - HIAST
                        </h6>
                        <div className="time">
                           <i><span>From August 2018 to December 2021</span></i>
                        </div>
                        <div className="desc">
                           <p>
                              Majoring in information technology.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="box-overlay">
                     <div className="mark"></div>
                     <div className="mark_inner cursor"></div>
                     <div className="box-content_inner">
                        <h6>DATVIET SOFTWARE</h6>
                        <div className="time">
                           <i><span>From April 2021 to October 2021</span></i>
                        </div>
                        <div className="desc">
                           <p>
                              - Using HTML and CSS for web interface
                              maintenance and development.
                           </p>
                           <br />
                           <p>
                              - Testing and creating reports for features
                              currently under development.
                           </p>
                        </div>
                     </div>
                  </div>

               </div>
               <div className="box-content">
                  <div className="bar-process" style={{ height: `${valueHeight2}px` }}></div>
                  <div className="box-overlay">
                     <div className="mark"></div>
                     <div className="mark_inner cursor"></div>
                     <div className="box-content_inner">
                        <h6>5STARS Software Solution Co., Ltd. - Deep
                           Understanding. Long Experience. Big Knowledge</h6>
                        <div className="time">
                           <i><span>From August 2022 to June 2023</span></i>
                        </div>
                        <div className="desc">
                           <p>
                              - Utilized ASP.NET and SVN as the primary tools
                              for web application development and
                              collaboration.
                           </p>
                           <br />
                           <p>
                              - Developed and maintained user interfaces
                              for company web applications using HTML,
                              CSS, and Javascript.
                           </p>
                           <br />
                           <p>
                              - Coordinated and provided valuable insights
                              in deploying and constructing web services
                              to complement dynamic data for the web
                              interfaces.
                           </p>
                           <br />
                           <p>
                              - Collaborated closely with the mobile
                              development team to optimize web
                              applications for mobile platforms through
                              WebView integration.
                           </p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   )
}

export default Resume;