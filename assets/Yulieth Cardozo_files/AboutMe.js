
function AboutMe (){

  //Rutas de  imágenes
  const imgSecTwo = './assets/imgSec2.png';
  const line = './assets/Line.png';
  const polygon = './assets/polygon.png';

  // Crear elementos HTML
  const sectionTwo = document.createElement('section')
 
  //Asignar atributos y contenido
  sectionTwo.id = 'section-two';

  const title = `
              <div class='div-title'>
                <h2 class='title-section-two'>SOBRE MI</h2>
                <p class='textInitial'>Logopeda especializada en la rehabilitación del lenguaje y el tratamiento del dolor maxilofacial</p>
              </div>
                `;
  
  const cards = `
              <div class='card'>
                <div>
                  <img src=${imgSecTwo} alt="img" class='figure'/>
                </div >
                  <div >
                  <img src=${polygon} alt="img" class='polygon'/>
                  </div >
                <figure >
                  <div >
                    <div class=text-content>
                      <p class='subtitle2'>DRA. Yulieth Cardozo</p>
                      <img src=${line} alt="line" class= 'line'/>
                      <p class='description'>En 2009, completé mis estudios de logopedia y desde entonces me he especializado en áreas como terapia ABA, neurorehabilitación, terapia de voz, entre otras. Además, he trabajado en cargos asistenciales y de auditoría clínica en diversas organizaciones. En 2014, obtuve un MBA en Administración de Empresas. Actualmente, tengo mi propia consulta en Barcelona, en el centro Viusalut Medicina Integrativa, y también atiendo en Badalona. Mi objetivo es ofrecer un enfoque integral en el tratamiento logopédico y compartir mis conocimientos con pacientes y profesionales interesados en actualizarse en el campo.</p> 
                      <p class='subtitle2'>¿Porqué solicitar mi servicio?</p>
                        <ul>
                          <li class='description'>Ofrezco una terapia personalizada, pensada para cada paciente de manera diferente, centrada en intereses, fortalezas y debilidades.</li>
                          <li class='description'>A lo largo de mi experiencia profesional, he llegado a la conclusión de que la personalización es el factor diferenciador más importante después de la humanización del servicio.</li>
                          <li class='description'>Dedico tiempo significativo a la planificación de las sesiones terapéuticas para garantizar una mejora en la calidad de vida del paciente.</li>
                        </ul>
                        </div>
                    </div>
                </figure>
              </div>
              `


  // Estructurar el DOM
  sectionTwo.innerHTML += title;
  sectionTwo.innerHTML += cards;

  return sectionTwo;
}

{/* <img src=${rectangle} alt="rectangle" class='figure'/> */}