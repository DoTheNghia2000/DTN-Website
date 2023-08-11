import { useRef, useState, useEffect, useContext } from 'react';
import './App.css';
import { Header, Banner, MainContainer, Loading } from './components'
import { DarkModeContext, LoadingContext, MenuContext } from './context/ModuleContext';

function App() {
  const [transform, setTransform] = useState(null);
  const [transformHeader, setTransformHeader] = useState(null);
  const [transformImageBanner, setTransformImageBanner] = useState(null);
  const [transformTextBanner, setTransformTextBanner] = useState(null);
  const [transformCard, setTransformCard] = useState(null);
  const [valueScroll, setValueScroll] = useState(0);
  const AppRef = useRef(null);

  const [opacity, setOpacity] = useState({ opacity: 0 });
  const [isStart, setIsStart] = useState(true);

  const { darkMode } = useContext(DarkModeContext);
  const { loading, toggleLoading } = useContext(LoadingContext);
  const { typeMenu } = useContext(MenuContext);

  useEffect(() => {

    if (AppRef.current) {
      const scroll_container = document.getElementById('scroll-container');
      const height_App = document.querySelector('.App');
      const valueRef = AppRef.current.getBoundingClientRect().height;
      // const valueScroll = (valueRef - height_App.clientHeight) * 0.03710575139;
      const valueScroll = 120;
      let start = 0, max = 0;
      console.log(valueRef, window.innerHeight)

      const animationScrollUp = () => {
        start -= valueScroll * 0.03;

        const count = Math.max(start, max);

        if (Math.round(count) === 0) {
          setTransform({ transform: `translate3d(0, 0, 0)` });
          setTransformCard({ transform: `translate3d(0, 0, 0)` });
          setTransformImageBanner({ transform: `translate3d(0, 0, 0)` });
          setTransformTextBanner({ transform: `translate3d(0, 0, 0)` });
          setTransformHeader({ transform: `translate3d(0, 0, 0)` });
        } else {
          setTransform({ transform: `translate3d(0, -${count}px, 0)` });
          if (count < 80) {
            setTransformCard({ transform: `translate3d(0, 0px, 0)` });
          } else {
            setTransformCard({ transform: `translate3d(0, ${count - 80}px, 0)` });
          }
          setTransformHeader({ transform: `translate3d(0, ${count}px, 0)` });

          if (Math.round(count) < 560) {
            setTransformImageBanner({ transform: `translate3d(0, ${count * 0.35}px, 0)` });
            setTransformTextBanner({ transform: `translate3d(0, -${count * 0.15}px, 0)` });
          }

        }

        if (count !== max) {
          window.requestAnimationFrame(animationScrollUp)
        }

      }


      const animationScrollDown = () => {
        start += valueScroll * 0.03;

        const count = Math.min(start, max);

        setTransform({ transform: `translate3d(0, -${count}px, 0)` });
        if (count > 80) {
          setTransformCard({ transform: `translate3d(0, ${count - 80}px, 0)` });
        }
        setTransformHeader({ transform: `translate3d(0, ${count}px, 0)` });

        if (Math.round(count) < 560) {
          setTransformImageBanner({ transform: `translate3d(0, ${count * 0.35}px, 0)` });
          setTransformTextBanner({ transform: `translate3d(0, -${count * 0.15}px, 0)` });
        }

        setValueScroll(count);

        if (count !== max) {
          window.requestAnimationFrame(animationScrollDown)
        }

      }

      const handleScrollMouse = (event) => {
        const delta = Math.sign(event.deltaY);

        if (delta === -1) {
          console.log('Scroll up');

          if (Math.round(max) > 0) {
            max -= valueScroll;
            window.requestAnimationFrame(animationScrollUp);
          }

        } else if (delta === 1) {
          console.log('Scroll down');

          if (max < (valueRef - height_App.clientHeight)) {
            max += valueScroll;
            window.requestAnimationFrame(animationScrollDown);
          }

        }

      }

      const handleScrollKey = (event) => {

        if (event.key === 'ArrowUp') {
          console.log('Scroll up');

          if (Math.round(max) > 0) {
            max -= valueScroll;
            window.requestAnimationFrame(animationScrollUp);
          }

        } else if (event.key === 'ArrowDown') {
          console.log('Scroll down');

          if (max < (valueRef - height_App.clientHeight)) {
            max += valueScroll;
            window.requestAnimationFrame(animationScrollDown);
          }

        }

      }

      if (window.innerWidth > 992) {
        setTransform({ transform: `translate3d(0, 0, 0)` });
        setTransformCard({ transform: `translate3d(0, 0, 0)` });
        setTransformImageBanner({ transform: `translate3d(0, 0, 0)` });
        setTransformTextBanner({ transform: `translate3d(0, 0, 0)` });
        setTransformHeader({ transform: `translate3d(0, 0, 0)` });
        setValueScroll(0);
        scroll_container.addEventListener('wheel', handleScrollMouse);
        scroll_container.addEventListener('keydown', handleScrollKey);
      }else{
        window.scrollTo(0,0);
      }

      return () => {
        scroll_container.removeEventListener('wheel', handleScrollMouse);
        scroll_container.removeEventListener('keydown', handleScrollKey);
      };

    }

  }, [typeMenu]);

  useEffect(() => {

    let valueStart = 1;
    let valueCount = null;

    const animationOpacity0 = () => {
      valueStart -= 0.01;
      valueCount = Math.max(valueStart, 0);
      setOpacity({ opacity: valueCount });

      if (valueCount !== 0) {
        window.requestAnimationFrame(animationOpacity0);
      } else {
        setTimeout(() => {
          window.requestAnimationFrame(animationOpacity1);
        }, 1500)
      }

    }

    const animationOpacity1 = () => {
      valueStart += 0.01;
      valueCount = Math.min(valueStart, 1);
      setOpacity({ opacity: valueCount });

      if (valueCount !== 1) {
        window.requestAnimationFrame(animationOpacity1);
      } else {
        toggleLoading();
      }

    }

    if (loading) {
      window.requestAnimationFrame(animationOpacity0);
    }

    return () => {
      window.cancelAnimationFrame(animationOpacity0);
    }

  }, [loading, toggleLoading])

  useEffect(() => {
    let valueStart = 0;
    let valueCount = null;
    const animationOpacity1 = () => {
      valueStart += 0.01;
      valueCount = Math.min(valueStart, 1);
      setOpacity({ opacity: valueCount });

      if (valueCount !== 1) {
        window.requestAnimationFrame(animationOpacity1);
      } else {
        setIsStart(false);
      }

    }
    let timeout = setTimeout(() => {
      window.requestAnimationFrame(animationOpacity1);
    }, 1500)

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div
      className={`App`}
      tabIndex={0} id="scroll-container" data-set-background={darkMode ? 'dark' : 'light'}>

      {loading || isStart ? <Loading /> : ''}
      <div className={`App_inner`} ref={AppRef} style={{ ...transform, ...opacity }}>
        <Header transformHeader={transformHeader}></Header>
        <Banner
          transformImageBanner={transformImageBanner}
          transformTextBanner={transformTextBanner}
        ></Banner>
        <MainContainer
          transformCard={transformCard}
          valueScroll = {valueScroll}
        ></MainContainer>
      </div>

    </div>
  );
}

export default App;
