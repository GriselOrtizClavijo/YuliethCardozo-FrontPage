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
                        <img src=${facebook} alt="">
                        <img src=${instagram} alt="">
                        <img src=${linkedIn} alt="">
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