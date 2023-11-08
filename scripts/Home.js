function Home() {

    //Rutas de  imágenes
    
    const sliderOne = './assets/banner.jpeg';
    const sliderTwo = './assets/banner2.jpg';
    const sliderThree = './assets/banner3.jpg';
    const sliderFour = './assets/banner4.jpg';
  
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
      sectionHome.id='section-one'
  
      const navbar = `<nav class= 'navbar '>
                        <div class='imgNavBar'>
                            <a href="#section-one">
                            <img src=${logo} class='logo' alt='logo'/>
                            <img src=${logopedaSmall} class='logopedaNav' alt='logo'/>
                            </a>
                        </div>
                          <ul class="listNav">
                              <li class="nav_line"><a href="#section-one">Inicio</a></li>
                              <li class="nav_line"><a href="#section-two">Sobre mi</a></li>
                              <li class="nav_line"><a href="#section-three">Servicios</a></li>
                              <li class="nav_line"><a href="#section-four">Testimonios</a></li>
                              <li class="nav_line"><a href="#section-five">Reservar</a></li>
                              <li class="nav_line"><a href="#section-six">Contacto</a></li>
                          </ul>
                          <button class="nav-toggle" >
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: #545965">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M4 6l16 0"></path>
                              <path d="M4 12l16 0"></path>
                              <path d="M4 18l16 0"></path>
                            </svg>  
                          </button>
                    </nav>
  
                    `
    
      
      const bannerContact = `<div class='banner-contact'>
                              <div class="contact-bar">
                                <a href="https://maps.app.goo.gl/t5peeFNCpdte82o1A"class="contact-item">
                                  <img src=${direccion} class="icono address" alt="Dirección">
                                  <p class="address">C. de Pau Claris, 162, 8-5</p>
                                </a>
  
                                <a href="mailto:info@barcelonalogopeda.com" class="contact-item">
                                  <img src=${email} class="icono" alt="Email">
                                  <p>info@barcelonalogopeda.com</p>
                                </a>
  
                                <a href="tel:+34678436616" class="contact-item">
                                  <img src=${telefono} class="icono" alt="Teléfono">
                                  <p>(+34) 678 43 66 16</p>
                                </a>
                                </div> 
                               
                                <div class="social-icons">
                                  <a href="/testimonios"><img src=${facebook} alt="Facebook" class="iconors"></a>
                                  <a href="/reservar"><img src=${instagram} alt="Instagram" class="iconors"></a>
                                  <a href="https://www.linkedin.com/in/logopedayuliethcardozo"><img src=${linkedIn} alt="LinkedIn" class="iconors"></a>
                                </div>
                              `
    
      const inSectionOne = `<div class='in-section-one'>
                            <img src=${logopeda} class='logopeda-img' alt = 'logopeda'/>
                            <h3 class= 'text2-section-1'>PRESENCIAL Y ONLINE</h3>
                            <h4 class = 'text3-section-1'>NIÑOS Y ADULTOS</h4>
                          </div>
                          `

      const footerSectionOne = `<div>
                                <img src = ${fondo1} class= 'img-white'/>
                                <img src = ${fondo2} class = 'img-green'/>
                               </div>
                              `
   
      const slider = `
                    <div class='container-carousel'>
                 
                      <div class='slider' id='slider-id'>
                        <section class='slider-section'>
                           <img src=${sliderOne} alt="photo-slider1"></img>
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
  
                      <div class='btn-left'> 
                        <img src=${prev}  alt = 'prev'/> 
                      </div>
                      <div class='btn-right'> 
                        <img src=${next}  alt = 'next'/> 
                      </div>
  
                    </div>
                    
                    `
  
      // Estructurar el DOM
      sectionHome.innerHTML += navbar;
      sectionHome.innerHTML +=bannerContact;
      sectionHome.innerHTML += inSectionOne;
      sectionHome.innerHTML += slider;
      sectionHome.innerHTML += footerSectionOne
  
         
  
    return sectionHome;
  }