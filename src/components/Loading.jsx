import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import { useContext } from 'react';
import { DarkModeContext, LoadingContext } from '../context/ModuleContext';

const Loading = () => {
   const { darkMode } = useContext(DarkModeContext);
   const {typeLoading} = useContext(LoadingContext);

   return (
      <div className={`Loading`}>
         {
            typeLoading === 'LOADSWITCHMODE' ? (
               <div className={`load-switch-mode ${darkMode ? 'active' : ''}`}>
                  <Brightness5OutlinedIcon className='light' />
                  <DarkModeOutlinedIcon className='dark' />
               </div>
            ) :  typeLoading === 'LOADPAGE' && (
               <div className={`load-page ${darkMode ? 'active' : ''}`}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            )
         }
      </div>
   )
}

export default Loading