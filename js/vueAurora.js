const { createApp } = Vue
createApp({
    //Opciones de configuración para la aplicación
    data(){
        return{
            //Propiedades de datos que seránm utilizados en el HTML
            src: 'vid/aurora-borealis-over-the-sea-moewalls-com.mp4',
            type: 'video/mp4'
        }
    }
}).mount('#background-video')