const frutas = ['Manzana', 'Pera', 'Mango']
// console.time('slice')
const otrasFrutas = [...frutas]
// console.timeEnd('slice')

otrasFrutas.push('Banana');

// console.table({frutas, otrasFrutas})


let prueba = 'top-right'
// const pruebas = ['bottom-left', 'bottom-right', 'top-left', 'top-right' ]

console.time('if')
if(prueba == 'bottom-left') console.log(prueba)
else if(prueba == 'bottom-right') console.log(prueba)
else if(prueba == 'top-left') console.log(prueba)
else if(prueba == 'top-right') console.log(prueba)
else console.log('Ninguno')
console.timeEnd('if')

console.time('switch')
switch (prueba) {
    case 'bottom-left':
        console.log(prueba)
        break;
    case 'bottom-right':
        console.log(prueba)
        break;
    case 'top-left':
        console.log(prueba)
        break;
    case 'top-right':
        console.log(prueba)
        break;
    default:
        console.log('Ninguno')
        break;
}
console.timeEnd('switch')