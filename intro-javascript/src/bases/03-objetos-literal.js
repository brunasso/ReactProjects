const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'NY',
        zip: 552334,
        lat: 14.324,
        lng: 43.2342,
    }
}

// console.log({
//     persona: persona
// });
// console.log({persona});
console.log('Persona 1', persona);
const persona2 = persona;
persona2.nombre = 'Bruno'

console.log('Persona 2', persona2);

console.log('Un espacio en consola');

// Al realizar lo siguiente, el toma una referencia del objeto, por lo que es el mismo objeto.
const persona3 = persona;
persona3.nombre = 'Joaquin';

console.log('Persona 1', persona);
console.log('Persona 3', persona3);

//FORMA CORRECTA DE COPIAR VALORES DE UN OBJETO SIN REFERENCIARLO


const persona4 = {...persona};
persona4.nombre = 'Alex';
console.log('Un espacio en consola');

console.log('Persona 1', persona);
console.log('Persona 3', persona4);