// import '../sass/main.scss';


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startRender= document.querySelector('button[data-start]');
const stopRender = document.querySelector('button[data-stop]');
const body= document.querySelector('body');

const bodyTheme = body.style.backgroundColor = getRandomHexColor()




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


let Interval = null;
startRender.addEventListener('click', function () {
   if (Interval=true) {
      Interval = setInterval(() => {
         body.style.backgroundColor = getRandomHexColor();
      }, 1000)
   
   }
   else {
      return;
   }

});

 stopRender.addEventListener('click', function () {
      if (!Interval==false) {
         clearInterval(Interval);
         
      }
      else {
      Interval = null;
      }
   })



