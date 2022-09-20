const nombre = 'Bruno';
const apellido = 'Tomasso';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Hola mundo: Mi nombre es ${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(){
    return 'Hola mundo'
}

console.log(`Es un texto: ${ getSaludo()}`);