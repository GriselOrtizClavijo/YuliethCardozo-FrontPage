
function starCarousel (){

   const btnLeft = document.querySelector('.btn-left');
   const btnRight = document.querySelector('.btn-right');
   const sliderContainer = document.querySelector('#slider-id');
   const sliderSection = document.querySelectorAll('.slider-section');
   
   console.log(sliderSection);
 
   setInterval(() => {
     moveToRight()
 }, 6000);
 
   let operaction = 0;
   let counter = 0;
   let widthImg = 100/sliderSection.length;
 
   function moveToRight() {
     if (counter >= sliderSection.length -1) {
       counter = 0;
       operaction = 0;
       sliderContainer.style.transform = `translate(-${operaction}%)` 
     } else{
       counter ++;
   
       operaction= operaction + widthImg;
       sliderContainer.style.transform = `translate(-${operaction}%)` 
       sliderContainer.style.transition = "all ease .6s"
     }
   }
 
   function moveToLeft() {
     counter -- ;
     if (counter < 0) {
       counter = sliderSection.length -1;
       operaction = widthImg * (sliderSection.length -1);
       sliderContainer.style.transform = `translate(-${operaction}%)`
     } else{
 
       operaction= operaction - widthImg
       sliderContainer.style.transform = `translate(-${operaction}%)`
       sliderContainer.style.transition = "all ease .6s"
       }
 
   }

   btnLeft.addEventListener("click", e => moveToLeft())
   btnRight.addEventListener("click", e => moveToRight())
}

document.addEventListener("DOMContentLoaded", function() { 
    const app = document.getElementById('app');

    app.appendChild(Home());  
    starCarousel();
    app.appendChild(AboutMe()); 
    app.appendChild(Services());
    app.appendChild(Testimonials());
    app.appendChild(Booking());
    app.appendChild(Contact());
    app.appendChild(Footer());
   
  
  });