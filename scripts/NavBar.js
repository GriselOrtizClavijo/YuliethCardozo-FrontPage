// function setupNavbar() {
//   // Obtiene referencias a los elementos necesarios
//   const menuIcon = document.getElementById('menuIcon');
//   const navList = document.getElementById('navList');

//   // Agrega un controlador de eventos para hacer clic en el ícono del menú
//   menuIcon.addEventListener('click', toggleNav);

//   // Función para mostrar u ocultar la lista de elementos de navegación
//   function toggleNav() {
//     navList.classList.toggle('show');
//   }

//   // Opcional: Cerrar el menú si se hace clic en un enlace
//   const navLinks = navList.querySelectorAll('a');
//   navLinks.forEach((link) => {
//     link.addEventListener('click', () => {
//       navList.classList.remove('show');
//     });
//   }


//   // Opcional: Cerrar el menú si se hace clic fuera de él
//   document.addEventListener('click', (event) => {
//     if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
//       navList.classList.remove('show');
//     }
//   });
// }

// Llama a la función para configurar la barra de navegación
setupNavbar();


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