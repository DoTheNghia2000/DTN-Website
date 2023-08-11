import BannerHome from '../assets/banner_home.jpg'
import BannerPortfolio from '../assets/banner_portfolio.jpg'
import BannerResume from '../assets/banner_resume.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { MenuContext } from '../context/ModuleContext';
import { useContext, useEffect, useState } from 'react';

const Banner = ({ transformImageBanner, transformTextBanner }) => {
   const [urlImg, setUrlImg] = useState(null);
   const [text, setText] = useState(null);
   const [title, setTitle] = useState(null);
   const { typeMenu } = useContext(MenuContext);

   useEffect(() => {
      if (typeMenu === "HOME") {
         setUrlImg(BannerHome);
         setText(<p>
            HI MY NEW FRIEND!
         </p>);
         setTitle(<h1>
            Discover my <br /> art space!
         </h1>);
      }
      if (typeMenu === "PORTFOLIO") {
         setUrlImg(BannerPortfolio);
         setText(<p>
            PORTFOLIO
         </p>);
         setTitle(<h1>
            Recent work <br /> performed
         </h1>);
      }
      if (typeMenu === "RESUME") {
         setUrlImg(BannerResume);
         setText(<p>
            RESUME
         </p>);
         setTitle(<h1>
            My Skills <br /> and History
         </h1>);
      }
      if (typeMenu === "CONTACT") {
         setUrlImg(BannerPortfolio);
         setText(<p>
            CONTACT
         </p>);
         setTitle(<h1>
            My gmail <br /> and phone number
         </h1>);
      }
      if (typeMenu === "BLOG") {
         setUrlImg(BannerResume);
         setText(<p>
            NEWSLETTER
         </p>);
         setTitle(<h1>
            Welcome to <br /> my personal blog
         </h1>);
      }
   }, [typeMenu])

   return (
      <div className="Banner">
         <div className="Banner__inner">
            <img src={urlImg} alt="" style={transformImageBanner} />
            <div className='content'>
               <div className='content__inner' style={transformTextBanner}>
                  <div className='box-empty'>

                  </div>
                  <div className='box-fill'>
                     {text}
                     {title}
                     <button className='cursor user-select'>VIDEO RESUME <PlayArrowIcon /> </button>
                     <div className='scroll-hint cursor user-select'>
                        <div className='mouse'>

                        </div>
                        <p>SCROLL DOWN</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner