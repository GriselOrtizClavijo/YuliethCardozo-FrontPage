
function Services () {

   //Rutas de  imágenes
   const imgSup = './assets/imgSupSec3.png';
   const photoOne = './assets/photo1Sec3.jpg';
   const photoTwo = './assets/photo2Sec3.jpg';
   const photoThree = './assets/photo3Sec3.jpg';
   const photoFour = './assets/photo4Sec3.png';
   const recSecThree = './assets/RecSec3.png';

  // Crear elementos HTML
  const sectionThree = document.createElement('section')

  const imageSup = `
                    <img src=${imgSup} alt='imgBanner' class='img-sup'/>
                  `

  const title = `
              <div class='div-title'>
                <h2 class='title-section-two'>SERVICIOS</h2>
              </div>
                `;
  

  const cards = `
                <div class='container-cards'>
                  <article class='unit-card'>
                    <div>
                      <img src=${photoOne} class='img-card'/>
                      <img src=${recSecThree} class='rec-card'/>
                      <div class='rec-card'>
                        <p class="sub-card">Tratamiento neurorehabilitación</p>
                        <p class="text-card">Síndromes congénitos que producen alteración del habla y el lenguaje.</p>
                      </div>
                    </div>
                  </article>
                  <article class='unit-card'>
                    <div>
                      <img src=${photoTwo} class='img-card'/>
                      <img src=${recSecThree} class='rec-card'/>
                      <div class='rec-card'>
                        <p class="sub-card">Tratamiento Orofaciales</p>
                        <p class="text-card">Disfunciones de la articulación temporomandibular, bruxismo, acúfenos.</p>
                      </div>
                    </div>
                  </article>
                  <article class='unit-card'>
                    <div>
                      <img src=${photoThree} class='img-card'/>
                      <img src=${recSecThree} class='rec-card'/>
                      <div class='rec-card'>
                        <p class="sub-card">Tratamientos del lenguaje</p>
                        <p class="text-card">Dificultades del lenguaje y la comunicación. Trastorno generalizado del desarrollo asperger-autismo.</p>
                      </div>
                    </div>
                  </article>
                  <article class='unit-card'>
                    <div>
                      <img src=${photoFour} class='img-card'/>
                      <img src=${recSecThree} class='rec-card'/>
                      <div class='rec-card'>
                        <p class="sub-card">Alteraciones de la voz</p>
                        <p class="text-card">Nódulos, pólipos en cuerdas vocales. Disfonía por sobreesfuerzo vocal Inadecuada técnica vocal</p>
                      </div>
                    </div>
                  </article>
                </div>
                `
  // Establecer atributos y contenido
  sectionThree.id = 'section-three';

  // Estructurar el DOM
  sectionThree.innerHTML += imageSup;
  sectionThree.innerHTML += title;
  sectionThree.innerHTML += cards;

  return sectionThree;
}

