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

console.log(persona)
delete persona.edad;
console.log(persona)

//Convertir un obj a un array
const entriesPares = Object.entries(persona)
console.log(entriesPares)

//Bloqueo de props del obj.
Object.freeze(persona)
persona.nombre = 'Algo nuevo'
console.log(persona)

console.log(Object.getOwnPropertyNames(persona), Object.values(persona))