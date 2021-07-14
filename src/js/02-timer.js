import Swal from 'sweetalert2'


const input = document.getElementById('date-selector');
const startBtn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const timeValue = document.querySelector('.value');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');



   const time = {
   isActive: false,
   start() {
      if (this.isActive) {
         return;
      }
      this.isActive = true;
      this.intervalId = setInterval(() => {
      const currentTime= Date.parse(new Date());
      const onchange = () => input.value;
      const startTime = Date.parse(onchange());
         const deltaTime = startTime-currentTime;
         const timeConvert =convertMs(deltaTime);
      console.log(timeConvert)
      day.textContent = `${timeConvert.days}`;
      hour.textContent = `${timeConvert.hours}`;
      minute.textContent = `${timeConvert.minutes}`;
      second.textContent = `${timeConvert.seconds}`;
         
   }, 1000);
      },
   
      stop() {
         if (timeConvert === 0) {
            clearInterval(this.intervalId);
            this.isActive = false; }
      
   }
};  
     
  startBtn.addEventListener('click', () => {
   time.start();
  
});





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 10000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}

function pad(value) {
    return String(value).padStart(2, '0');
}

// const timer1 = new Timer(Date.parse('July 16 2021'));
// console.log(timer1);