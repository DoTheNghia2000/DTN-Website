import icon_5 from '../assets/icon-5.svg';
import icon_6 from '../assets/icon-6.svg';
import icon_5w from '../assets/icon-5w.svg';
import icon_6w from '../assets/icon-6w.svg';
import { useContext } from 'react';
import { DarkModeContext } from '../context/ModuleContext';

const Contact = () => {
   const { darkMode } = useContext(DarkModeContext);

   return (
      <div className="Contact">
         <section className="elementor-section my-contact">
            <div className="elementor-container">
               <div className="box-content">
                  <div className="box-content_inner">
                     {
                        darkMode
                           ? (<img src={icon_5w} alt="" />)
                           : (<img src={icon_5} alt="" />)
                     }
                     <h6>Call</h6>
                     <div className='desc'>
                        <span>WORK: </span>
                        <span>0332570057</span>
                     </div>
                  </div>
               </div>
               <div className="box-content">
                  <div className="box-content_inner">
                     {
                        darkMode
                           ? (<img src={icon_6w} alt="" />)
                           : (<img src={icon_6} alt="" />)
                     }
                     <h6>Write</h6>
                     <div className='desc'>
                        <span>GMAIL: </span>
                        <span>dothenghia2000@gmail.com</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Contact