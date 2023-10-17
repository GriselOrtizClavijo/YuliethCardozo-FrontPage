
function Booking () {

   //Rutas de  imágenes
   const photoButton = './assets/calendar.png'
   const imgBack = './assets/rec-fondo.png'

  // Crear elementos HTML
  const sectionFive = document.createElement('section')

  const cards = `
              <div class='card-sec-five'>
                <article >
                    <h3 class='title-section-two'>RESERVAR</h3>
                    <p class= 'text-testimonial'>Descubre por qué mis pacientes me recomiendan. Sus testimonios son la mejor manera de conocer cómo mi trabajo ha transformado sus vidas. ¡Haz clic en el botón para conocer sus experiencias!</p>
                    <a href="https://www.doctoralia.es/yulieth-cardozo-viera/logopeda/barcelona" class='button-card'>
                        RESERVAR
                        <img src =${photoButton} class='imgButton'/> 
                    </a>
                </article>
              </div>
              `
  const imgRec = `
                  <img src =${imgBack} class='imgBack'/> 
                  `


  // Establecer atributos y contenido
  sectionFive.id = 'section-five';

  // Estructurar el DOM
  sectionFive.innerHTML += imgRec;
  sectionFive.innerHTML += cards;


  return sectionFive;
}

