

function Contact()  {

   //Rutas de  imágenes
   const direccion = './assets/dir-green.png';
   const email= './assets/mail-green.png';
   const telefono = './assets/tel-green.png';
   const line = './assets/Line.png';

  // Crear elementos HTML
  const sectionSix = document.createElement('section')

  const cards = `<div class='cards-six'>
                        
                        <form target="_blank" action="https://formsubmit.co/info@barcelonalogopeda.com  " method="POST" class='formContact'>
                                <div class="block">
                                        <h3 class='title-section-two'>CONTACTO</h3>
                                </div>
                       
                   
                                <div  class="block">
                                        <label for="nombreApellido">Nombre y Apellido:</label>
                                        <input type="text" name="name" class="form-control" required/>
                                </div>
                                <div >
                                        <label for="correo">Correo electrónico:</label>
                                        <input type="email" name="email" class="form-control" required/>
                                </div>
                                <div >
                                        <label for="celular">Celular:</label>
                                        <input type="tel" name="tel" class="form-control" required/>
                                </div>
                   
                        <div  class="block">
                                <label for="mensaje">Mensaje:</label>
                                <textarea  class="form-control" name="message" rows="5" required></textarea>
                        </div>
                        <div class="blockButton">
                                <button type="submit" class="button-card-six button-card">ENVIAR</button>
                        </div>
                        </form>

                        <div class="container-img-card-small-card-small">       
                                 <div class='img-card-small'>
                
                                         <img src =${direccion} class="img-contact"/> 
                                         <a href="mailto:info@barcelonalogopeda.com"><img src =${email} class="img-contact"/></a> 
                                         <a href="tel:+34678436616"><img src =${telefono} class="img-contact"/></a> 
                
                                 </div>
                
                                 <div class='card-small' >
                                 <div>
                                         <h4 class= 'tittle-card-Small'>Dirección</h4>       
                                         <h5 class= 'text-card-Small'>C. de Pau Claris, 162, 8-5</h5>
                                         </div>
                
                                         <img src =${line}  class="img-line"/> 
                                         
                                         <div>
                                         <a href="tel:+34678436616">
                                         <h4 class= 'tittle-card-Small'>Celular</h4>
                                         <h5 class= 'text-card-Small'>(+34) 678 43 66 16</h5>
                                         </a>
                                         </div>
                
                                         <img src =${line} class="img-line"/> 
                
                                         <div>
                                         <a href="mailto:info@barcelonalogopeda.com">
                                         <h4 class= 'tittle-card-Small'>Correo</h4>
                                        <h5 class= 'text-card-Small'>info@barcelonalogopeda.com</h5>
                                         </a>
                                         </div>
                
                                 </div>
                                 </div>
                </div>`

//   const cards = `
        //      
        //             <input type="hidden" name="_next" value="http://127.0.0.1:5500/">
        //             <input type="hidden" name="_captcha" value="false">
        //         </form>
        //         <div class="container-img-card-small-card-small">       
        //         <div class='img-card-small'>

        //                 <img src =${direccion} class="img-contact"/> 
        //                 <a href="mailto:info@barcelonalogopeda.com"><img src =${email} class="img-contact"/></a> 
        //                 <a href="tel:+34678436616"><img src =${telefono} class="img-contact"/></a> 

        //         </div>

        //         <div class='card-small' >
        //                 <div>
        //                 <h4 class= 'tittle-card-Small'>Dirección</h4>       
        //                 <h5 class= 'text-card-Small'>C. de Pau Claris, 162, 8-5</h5>
        //                 </div>

        //                 <img src =${line}  class="img-line"/> 
                         
        //                 <div>
        //                 <a href="tel:+34678436616">
        //                 <h4 class= 'tittle-card-Small'>Celular</h4>
        //                 <h5 class= 'text-card-Small'>(+34) 678 43 66 16</h5>
        //                 </a>
        //                 </div>

        //                 <img src =${line} class="img-line"/> 

        //                 <div>
        //                 <a href="mailto:info@barcelonalogopeda.com">
        //                 <h4 class= 'tittle-card-Small'>Correo</h4>
        //                 <h5 class= 'text-card-Small'>info@barcelonalogopeda.com</h5>
        //                 </a>
        //                 </div>

        //         </div>
        //         </div>
        //       </div>
        //       `

const responsiveCards = `
                        <div class='responsive-version'>
                        <form action="https://formsubmit.co/26e216becfb53b6b4c9174083f43c60a" method="POST" class='formContact' >
                        <div class="block">
                        <h3 class='title-section-two'>CONTACTO</h3>
                        </div>
                        <div class="block">
                                <label for="nombreApellido">Nombre y Apellido:</label>
                                <input type="text" name="nombreApellido" id="nombreApellido"  required>           
                        </div>
                        <div >                
                                <label for="correo">Correo electrónico:</label>
                                <input type="email" id="correo" name="correo" required>
                        </div>
                        <div > 
                                <label for="celular">Celular:</label>
                                <input " type="tel"  name="celular" id="celular"  pattern="[0-9]{10}" required> 
                        </div>
                        <div class="block">         
                                <label for="mensaje">Mensaje:</label>
                                <textarea  name="mensaje"   id="mensaje"required></textarea>                        
                        </div>
                        <div class="blockButton">
                                <button type="submit" class='button-card-six button-card'>ENVIAR</button>
                        </div>
                        </form>
                        <div class="container-img-card-small-card-small">       
        
                        <div class='card-small' >
                                <div >
                                <img src =${direccion} class="img-contact"/> 
                                <h4 class= 'tittle-card-Small'>Dirección</h4>       
                                <h5 class= 'text-card-Small'>C. de Pau Claris, 162, 8-5</h5>
                                </div>

                                <img src =${line}  class="img-line"/> 
                                
                                <div>
                                <a href="tel:+34678436616">
                                <img src =${telefono} class="img-contact"/> 
                                
                                <h4 class= 'tittle-card-Small'>Celular</h4>
                                <h5 class= 'text-card-Small'>(+34) 678 43 66 16</h5>
                                </a>
                                </div>

                                <img src =${line} class="img-line"/> 

                                <div>
                                <a href="mailto:info@barcelonalogopeda.com">
                                <img src =${email} class="img-contact mail"/> 
                                <h4 class= 'tittle-card-Small'>Correo</h4>
                                <h5 class= 'text-card-Small'>info@barcelonalogopeda.com</h5>
                                </a>
                                </div>

                        </div>
                        </div>
                        </div>
                        `

  // Establecer atributos y contenido
  sectionSix.id = 'section-six';

  // Estructurar el DOM
  sectionSix.innerHTML += cards;
  sectionSix.innerHTML += responsiveCards;



  return sectionSix;
}

