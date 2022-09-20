//Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}
// Lo siguiente sirve para renombrar una variable al destructurar => claveObjeto:nombreVariable
// const {nombre:nombre2} = persona;
// const {nombre, edad, clave} = persona;

// console.log(nombre);

// const retornaPersona = (usuario) => {
//     const {nombre, edad, clave} = usuario;
//     console.log(nombre, edad, clave);
// }
//Destructurar funcion
// const retornaPersona = ({ nombre, edad, rango = 'Capitán' }) => {
//     console.log(nombre, edad, rango );
// }

const Context = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2562,
            lng: 53.3525,
        }
    }
}

// retornaPersona( persona )
const {nombreClave, anios, latlng:{lat, lng}} = Context(persona)
console.log(nombreClave, anios);
console.log(lat, lng);