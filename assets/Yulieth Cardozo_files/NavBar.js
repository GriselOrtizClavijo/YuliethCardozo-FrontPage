
window.addEventListener('scroll', () => {
   const sectionOne = document.getElementById('section-one');
   const navbar = document.querySelector('.navbar');
 
   if (sectionOne && navbar) {
     const sectionOneBottom = sectionOne.getBoundingClientRect().bottom;
     
     if (sectionOneBottom <= 0) {
       navbar.style.position = 'fixed';
       navbar.style.top = '0';
     } else {
       navbar.style.position = 'absolute';
       navbar.style.top = '63px';
     }
   }
 });