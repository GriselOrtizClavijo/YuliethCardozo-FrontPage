function Footer(){

     //Rutas de  imágenes
    const facebook = './assets/facebook.png';
    const instagram = './assets/instagram.png';
    const linkedIn= './assets/linkedIn.png';


    // Crear elementos HTML
  const footerApp = document.createElement('footer')
    
    const footerContent =  `
                <div class='footerApp'>    
                    <div class='footerSup'>
                        <a href="/testimonios"><img src=${facebook} alt="Facebook" class="iconors"></a>
                        <a href="/reservar"><img src=${instagram} alt="Instagram" class="iconors"></a>
                        <a href="https://www.linkedin.com/in/logopedayuliethcardozo"><img src=${instagram} alt="Instagram" class="iconors"></a>
                    </div>
                    <div class='footerInf'>
                        <p>Copyright 2023. Desarrollado por: Grisel Ortiz C. - Francy Vergara</p>
                    </div>
                </div>
                    `

     // Establecer contenido HTML
     footerApp.innerHTML = footerContent;

    return footerApp;
}