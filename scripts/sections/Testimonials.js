
function Testimonials ()  {

   //Rutas de  imágenes
   const photoFive = './assets/photo5Sec4.png'
   const photoButton = './assets/photoButton.png'
   const imageInf = './assets/imgInf.png'

  // Crear elementos HTML
  const sectionFour = document.createElement('section')

  const cards = `
              <div class='cards-section-four'>
                <article class='card-sec-four'>
                    <h3 class='title-section-two'>TESTIMONIOS</h3>
                    <p class= 'text-testimonial'>Descubre por qué mis pacientes me recomiendan. Sus testimonios son la mejor manera de conocer cómo mi trabajo ha transformado sus vidas. ¡Haz clic en el botón para conocer sus experiencias!</p>
                    <a href="https://www.doctoralia.es/yulieth-cardozo-viera/logopeda/barcelona" class='button-card'>
                        VER TESTIMONIOS
                        <img src =${photoButton} class='imgButton'/> 
                    </a>
                </article>
                <article class='card-sec-four'>
                        <img src= ${photoFive} class='img-card'/> 
                </article>
              </div>
              `
  const imgInf = `
                    <img src=${imageInf} alt='image bottom' class='imginf'/>
                  `

  // Establecer atributos y contenido
  sectionFour.id = 'section-four';

  // Estructurar el DOM
  sectionFour.innerHTML += cards;
  sectionFour.innerHTML += imgInf;

  return sectionFour;
}

