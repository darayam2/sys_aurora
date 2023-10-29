
//Renderización declarativa
const {createApp} = Vue //se crea una constante o variable, que tiene un tipo (objeto "createapp") que es una función y ese objeto/tipo es el que sigue, que tiene opciones, de configuración
createApp({
    //OPCIONES DE CONFIGURACIÓN
    data(){       //data() es un método o función especial de VUE que devuelve un objeto representado por lo que hay entre {}
        return {
            // todas las propiedades de los datos que serán utilizadas en el  HTML, se escriben: poropiedad: valor en formato json
            mensaje: 'hola comision',
            comision: 23532,
            curso: 'codo a codo',
            profesor: 'Daniel Rodríguez'
        }

    }

}).mount('#el_objeto') //para id en el html o el css es #, si fuera una clase sería .
