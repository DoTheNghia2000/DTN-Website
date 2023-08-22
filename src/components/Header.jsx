import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import { useContext, useState } from 'react';
import { DarkModeContext, LoadingContext, MenuContext } from '../context/ModuleContext';

const Header = ({ transformHeader }) => {
   const [isItemActive, setIsItemActive] = useState('HOME');
   const [isEventInProgress, setIsEventInProgress] = useState(true);
   const [isChecked, setIsChecked] = useState(false);

   const { toggleDarkMode } = useContext(DarkModeContext);
   const { toggleLoading, dispatch } = useContext(LoadingContext);
   const { handleItemMenu } = useContext(MenuContext);

   const handleItemClick = (values) => {
      if (isEventInProgress) {
         setIsEventInProgress(prevState => !prevState);
         handleMenu();
         dispatch({ type: "LOADPAGE" });
         toggleLoading();
         setTimeout(() => {
            handleItemMenu(values);
            setIsItemActive(values);
         }, 1500)

         setTimeout(() => {
            setIsEventInProgress(prevState => !prevState);
         }, 3000)
      }
   }

   const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
   };

   const handleDarkModeClick = () => {
      if (isEventInProgress) {
         setIsEventInProgress(prevState => !prevState);
         setIsChecked(prevState => !prevState);
         dispatch({ type: "LOADSWITCHMODE" });
         toggleLoading();

         setTimeout(() => {
            toggleDarkMode();
         }, 1500)

         setTimeout(() => {
            setIsEventInProgress(prevState => !prevState);
         }, 3000)
      }
   }

   const handleMenu = ()=>{
      const box_overlay = document.querySelector('.Header .box-overlay');
      const menu_btn = document.querySelector('.Header .trm-menu-btn');

      if(menu_btn.classList.contains('active')){
         box_overlay.classList.remove('active');
         menu_btn.classList.remove('active');
      }else{
         box_overlay.classList.add('active');
         menu_btn.classList.add('active');
      }
   }

   return (
      <div className="Header" style={transformHeader}>
         <div className='Header__inner'>
            <div className="logo">
               <span className='cursor user-select'>
                  I'm
                  <span>DTN</span>
               </span>
            </div>
            <div className='box-overlay'>
               <div className="menu">
                  <nav>
                     <ul>
                        <li
                           className={`cursor user-select ${isItemActive === 'HOME' ? 'active' : ''}`}
                           onClick={() => handleItemClick('HOME')}>
                           HOME
                        </li>
                        <li
                           className={`cursor user-select ${isItemActive === 'PORTFOLIO' ? 'active' : ''}`}
                           onClick={() => handleItemClick('PORTFOLIO')}>
                           PORTFOLIO
                        </li>
                        <li
                           className={`cursor user-select ${isItemActive === 'RESUME' ? 'active' : ''}`}
                           onClick={() => handleItemClick('RESUME')}>
                           RESUME
                        </li>
                        <li
                           className={`cursor user-select ${isItemActive === 'CONTACT' ? 'active' : ''}`}
                           onClick={() => handleItemClick('CONTACT')}>
                           CONTACT
                        </li>
                        <li
                           className={`cursor user-select ${isItemActive === 'BLOG' ? 'active' : ''}`}
                           onClick={() => handleItemClick('BLOG')}>
                           BLOG
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="dark-mode">
                  <Brightness5OutlinedIcon />
                  <div className='button'>
                     <input type="checkbox" id='switch-mode'
                        checked={isChecked}
                        onChange={handleCheckboxChange} />
                     <label
                        onClick={handleDarkModeClick}
                        className='button-switch-mode cursor user-select'
                     ></label>
                  </div>
                  <DarkModeOutlinedIcon />
               </div>
            </div>
            <div className="trm-menu-btn cursor" onClick={handleMenu}><span></span></div>
         </div>
      </div>
   )
}

export default Header