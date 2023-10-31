const customHeader={
    template:`
    <div class="header-aurora">
        <img class="logo-header" src="/img/logo-aurora.png" alt="">
    </div>
    `
}

const navBarAurora={
    template:`
    <div class="nav-aurora">
        <nav class="nav-bar">
            <a href="inicio.html"><i class="fa-solid fa-house"></i><span class="off">Inicio</span></a>
            <a href="Miperfil.html"><i class="fa-solid fa-user"></i><span class="off">Mi perfil</span></a>
            <a href="miaprendizaje.html"><i class="fa-solid fa-graduation-cap"></i><span class="off">Mi aprendizaje</span></a>
            <a href="Nosotros.html"><i class="fa-regular fa-address-card"></i><span class="off">Nosotros</span></a>
        </nav>
    </div>
    `
}

const footerAurora={
    // data(){
    //     return{
    //         item1: 'item1',
    //         item2: 'item2'
    //     }
    // },
    template:`
        <div class="footer-aurora">
            <div>
                <a aria-hidden="true" href="www.facebook.com"><i class="fa-brands fa-facebook"></i><span class="off">Facebook</span></a>
                <a aria-hidden="true" href="www.instagram.com"><i class="fa-brands fa-instagram"></i><span class="off">Instagram</span></a>
                <a aria-hidden="true" href="www.linkedin.com"><i class="fa-brands fa-linkedin"></i><span class="off">Linkedin</span></a>
            </div>
            <div>
                <p class="screen575"> Grupo 1 - Comisión 23532 </p>
                <p class="screen"> Desarrollado por el grupo 1 - Comisión 23532 </p>
            </div>
        </div>
    `
}


//VUE Object to have components
const componentsHeader=Vue.createApp({
    components:{
        'header-aurora': customHeader,
        'nav-bar-aurora': navBarAurora
    }
}).mount('#header-aurora')


const componentsFooter=Vue.createApp({
    // data(){
    //     return{
    //         textoFooter1: 'G1-C23532',
    //         textoFooter2: 'Desarrollado por el grupo: 1 - Comisión: 23532'
    //     }
    // },
    components:{
        'footer-aurora':footerAurora
    }
}).mount('#footer-aurora')