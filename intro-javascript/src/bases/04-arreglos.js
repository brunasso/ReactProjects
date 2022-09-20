// const arreglo = new Array(Tamaño del array en números);
const arreglo = [1,2,3,4];
// No se realiza de esta manera, utilizando push porque modifica el array principal. 
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)

//Utilizar spread Operator en lugar de push.
let arreglo2 = [...arreglo, 5];


const arreglo3 = arreglo2.map((e)=>{
    return e * 2
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);