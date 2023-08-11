import Avatar from '../assets/avatar_card.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Home, Footer, AnimationText, Portfolio, Resume, Contact, Blog } from './';
import { MenuContext } from '../context/ModuleContext';
import { useContext } from 'react';

const MainContainer = ({ transformCard, valueScroll }) => {
   const { typeMenu } = useContext(MenuContext);

   return (
      <div className="MainContainer">
         <div className='MainContainer_inner'>
            <div className="card">
               <div className='background'>
                  <div className="card__inner">
                     <div className="card__inner-content" style={transformCard}>
                        <div className="avatar">
                           <img src={Avatar} alt="" />
                           <h5 className="name">Do The Nghia</h5>
                           <div className="description">
                              <AnimationText />
                           </div>
                        </div>
                        <div className='divider'></div>
                        <ul className='social'>
                           <li><LinkedInIcon className='icon cursor' /></li>
                           <li><GitHubIcon className='icon cursor' /></li>
                           <li><TwitterIcon className='icon cursor' /></li>
                           <li><FacebookIcon className='icon cursor' /></li>
                           <li><YouTubeIcon className='icon cursor' /></li>
                        </ul>
                        <div className='divider'></div>
                        <ul className='info'>
                           <li>
                              <p>RESIDENCE:</p>
                              <p>VIET NAM</p>
                           </li>
                           <li>
                              <p>CITY:</p>
                              <p>HO CHI MINH</p>
                           </li>
                           <li>
                              <p>AGE:</p>
                              <p>23</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="content">
               <div className='content-inner'>
                  {
                     typeMenu === "HOME"
                        ? <Home valueScroll={valueScroll} />
                        : typeMenu === "PORTFOLIO"
                           ? <Portfolio valueScroll={valueScroll} />
                           : typeMenu === "RESUME"
                              ? <Resume />
                              : typeMenu === "CONTACT"
                                 ? <Contact />
                                 : typeMenu === "BLOG"
                                 && <Blog valueScroll={valueScroll} />
                  }
                  <div className='divider'></div>
                  <Footer />
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainContainer