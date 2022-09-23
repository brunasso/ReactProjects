//          De esta manera se retorna un objeto y se evita realizar la estructura del objeto en  el retorno
// function crearPersonal (nombre, apellido){
//     return {nombre, apellido}
// }


const crearPersona = (nombre, apellido) => ({nombre, apellido})


console.log(crearPersona('Bruno', 'Tomasso'))

// function imprimeArgs(){
//     console.log(arguments)
// }
// NO FUNCIONA ASI
// const imprimeArgs2 = ( )=> {
//     console.log(arguments)
// }

const imprimeArgs2 = (edad, ...args )=> {
        return args
    }

// imprimeArgs(10, true, false, 'Bruno', 'Tomasso')
imprimeArgs2(10, true, false, 'Bruno', 'Tomasso')

const [casado, vivo, nombre, apellido] = imprimeArgs2(10, true, false, 'Bruno', 'Tomasso')
console.log({casado, vivo, nombre, apellido})