const timeOut;
function goUp() {
   const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',60);
   } else clearTimeout(timeOut);
} 

