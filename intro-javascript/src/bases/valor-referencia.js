
// SOLAMENTE LOS PRIMITIVOS SE PASAN POR VALOR, EL RESTO TOMA LA REFERENCIA
let a = 10;
let b = a;
a = 30;

console.log({a, b})


let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'ana'
console.log({juan,ana})
//Larga 'ana' en ambos porque se pasa el valor por referencia

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony})

// COPIA CORRECTA DE UN OBJETO

let bruno = {nombre: 'Bruno'};
let tomasso = {...bruno};
tomasso.nombre = 'Aguiar'
console.log({bruno,tomasso})

const cambiaNombre2 = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let nuevoNombre = cambiaNombre2(bruno)
console.log(nuevoNombre)

// Arreglos
const frutas = ['Manzana', 'Pera', 'Mango']
const otrasFrutas = [...frutas]
otrasFrutas.push('Banana');

console.table({frutas, otrasFrutas})