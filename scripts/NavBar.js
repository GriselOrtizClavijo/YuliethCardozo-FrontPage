function setupNavbar() {

  const navIcon = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.bars_menu');
  const closeIcon = document.querySelector('.close-icon');
  const linksNav = document.querySelectorAll('.lineNavBar')


    navIcon.addEventListener('click', toggleNav);

      function toggleNav() {
        navList.classList.add('show')
        navIcon.style.display = 'none';
      }


    closeIcon.addEventListener('click', closeNav)

    function closeNav(){ 
      navList.classList.remove('show');
      navIcon.style.display = 'block';
    }


    linksNav.forEach(link => {
        link.addEventListener('click', () => {
          navList.classList.remove('show');
          navIcon.style.display = 'block';
        });
      });

    
     
  }


window.addEventListener('scroll', () => {
   const sectionOne = document.getElementById('section-one');
   const navbar = document.querySelector('.navbar');
   
 
   if (sectionOne && navbar) {
     const sectionOneBottom = sectionOne.getBoundingClientRect().bottom;
     
     if (sectionOneBottom <= 0) {
       navbar.style.position = 'fixed';
       navbar.style.top = '0';
       navIcon.classList.add('section-one-menu-icon'); 
     } else {
       navbar.style.position = 'absolute';
       navbar.style.top = '63px';
     }
   }
 });




 setupNavbar()