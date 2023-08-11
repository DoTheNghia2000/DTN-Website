import { useEffect, useState } from "react";


const AnimationText = () => {
   const [text, setText] = useState('');

   useEffect(() => {
      let arrayText = ['WEB DEVELOPER', 'UI/UX DESIGNER', 'GAMER :)'];
      let i = arrayText[0].length;
      let j = 0;
      let t;

      const AnimationDeleteText = (timeStamp) => {
         setText(prev => prev.slice(0, -1));
         i -= 1;
         if (i > 0) {
            setTimeout(() => {
               window.requestAnimationFrame(AnimationDeleteText);
            }, 100)
         } else {
            j += 1;
            if (j === arrayText.length) {
               j = 0;
            }
            setTimeout(() => {
               window.requestAnimationFrame(AnimationWriteText);
            }, 1000)
         }
      }

      const AnimationWriteText = (timeStamp) => {
         t = arrayText[j].charAt(i);
         setText(prev => prev += t);
         i += 1;
         if (i !== arrayText[j].length) {
            setTimeout(() => {
               window.requestAnimationFrame(AnimationWriteText);
            }, 100)
         } else {
            setTimeout(() => {
               window.requestAnimationFrame(AnimationDeleteText);
            }, 2000)
         }
      }
      setText(arrayText[0]);
      const timeoutId = setTimeout(() => {
         window.requestAnimationFrame(AnimationDeleteText);
      }, 3000);

      return () => {
         clearTimeout(timeoutId);
      };
   }, [])

   return (
      <span className="AnimationText">I'M {text}</span>
   )
}

export default AnimationText;