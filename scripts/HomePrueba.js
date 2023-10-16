
function Home() {

  //Rutas de  imágenes
  
  const sliderOne = './assets/banner.png';
  const sliderTwo = './assets/banner2.png';
  const sliderThree = './assets/banner3.png';
  const sliderFour = './assets/banner4.jpeg';

  const prev = './assets/left.png';
  const next = './assets/rigth.png';

  const logopeda = './assets/logopeda-big.png';
  const fondo1 = './assets/vector1.png';
  const fondo2 = './assets/vector2.png';
  const logo = './assets/logo-nav.png'
  const logopedaSmall= './assets/logopeda-small.png';
  const direccion = './assets/icono-direccion.png';
  const email= './assets/icono-email.png';
  const telefono = './assets/icono-telefono.png';
  const facebook = './assets/facebook.png';
  const instagram = './assets/instagram.png';
  const linkedIn= './assets/linkedIn.png';

    // Crear elementos HTML
    const sectionHome = document.createElement('section');


    const navbar = document.createElement('nav')
    const bannerContact = document.createElement('div');
   
    const inSectionOne = document.createElement('div');
    const logopedaImg = document.createElement('img');
    const text2 = document.createElement('h3');
    const text3 = document.createElement('h4');
    const footerSectionOne = document.createElement('div');
    const imgWhite = document.createElement('img');
    const imgGreen = document.createElement('img');
    const logoSmallNav = document.createElement('img')
    const logopedaSmallNav = document.createElement('img')
    const divNavbar = document.createElement('div');

  
    const slider = `
                  <div class='container-carousel'>
                    <div class='slider' id='slider-id'>
                      <section class='slider-section'>
                         <img src=${sliderOne} class="card1" alt="photo-slider1"></img>
                      </section>

                      <section class='slider-section'>
                        <img src=${sliderTwo} alt="photo-slider2">
                      </section>

                      <section class='slider-section'>
                        <img src=${sliderThree}  alt="photo-slider3">
                      </section>

                      <section class='slider-section'>
                        <img src=${sliderFour}  alt="photo-slider4"></img>
                      </section>
                    </div>

                    <div class='btn-left'> < </div>
                    <div class='btn-right'> > </div>

                  </div>
                  `
  
                        

    const textlistbanner = `<div class="contact-bar">
                              <div class="contact-item">
                                <img src=${direccion} class="icono" alt="Dirección">
                                <p>C. de Pau Claris, 162, 8-5</p>
                              </div>

                              <div class="contact-item">
                                <img src=${email} class="icono" alt="Email">
                                <p><a href="mailto:clogopedia.visualut@gmail.com">clogopedia.visualut@gmail.com</a></p>
                              </div>

                              <div class="contact-item">
                                <img src=${telefono} class="icono" alt="Teléfono">
                                <p><a href="tel:+34678436616">(+34) 678 43 66 16</a></p>
                              </div>
                              
                              <div class="social-icons">
                                <a href="/testimonios"><img src=${facebook} alt="Facebook" class="iconors"></a>
                                <a href="/reservar"><img src=${instagram} alt="Instagram" class="iconors"></a>
                                <a href="/contacto"><img src=${linkedIn} alt="LinkedIn" class="iconors"></a>
                              </div>
                          </div>`;

    const textlist = `<ul class="listNav">
                          <li><a href="#section-one">Inicio</a></li>
                          <li><a href="#section-two">Sobre mi</a></li>
                          <li><a href="#section-three">Servicios</a></li>
                          <li><a href="#section-four">Testimonios</a></li>
                          <li><a href="#section-five">Reservar</a></li>
                          <li><a href="#section-six">Contacto</a></li>
                      </ul>`;


  
    bannerContact.className = 'banner-contact';

    navbar.className= 'navbar'

    logoSmallNav.src= logo;
    logoSmallNav.alt='logo'
    logoSmallNav.className= 'logo'

    logopedaSmallNav.src= logopedaSmall;
    logopedaSmallNav.alt='logopedaSmall'
    logopedaSmallNav.className='logopedaNav'

    divNavbar.className= 'imgNavBar'

    logopedaImg.src = logopeda;
    logopedaImg.alt = 'logopeda';
    logopedaImg.className ='logopeda-img'

    inSectionOne.className= 'in-section-one'

    text2.className = 'text2-section-1';
    text2.textContent = 'PRESENCIAL Y ONLINE';

    text3.className = 'text3-section-1';
    text3.textContent = 'NIÑOS Y ADULTOS';

    imgWhite.src = fondo1;
    imgWhite.alt = '';
    imgWhite.className = 'img-white';

    imgGreen.src = fondo2;
    imgGreen.alt = '';
    imgGreen.className = 'img-green';

    //Estructura javascript para carrusel

      const btnLeft = document.querySelector('.btn-left');
      const btnRight = document.querySelector('.btn-right');
      const sliderContainer = document.querySelector('#slider-id');
      const sliderSection = document.querySelectorAll('.slider-section');
      
      console.log(sliderSection);
    
    //   setInterval(() => {
    //     moveToRight()
    // }, 3000);
    
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
     
    
      // Establecer atributos y contenido
      sectionHome.id='section-one'

    // Estructurar el DOM
   
    bannerContact.innerHTML += textlistbanner;
   

    divNavbar.append(logoSmallNav, logopedaSmallNav)
    navbar.append(divNavbar);
    inSectionOne.append(logopedaImg, text2, text3);
    footerSectionOne.append(imgWhite, imgGreen);
    sectionHome.append(bannerContact, navbar, inSectionOne, footerSectionOne);
    sectionHome.innerHTML += slider;
    navbar.innerHTML += textlist;

    

  return sectionHome;
}
