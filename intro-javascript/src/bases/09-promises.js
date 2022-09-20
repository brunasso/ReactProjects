import getHeroeById from './bases/08-import'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // Importar el getHeroeById();
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         // resolve(heroe);
//         reject(heroe);
//     }, 2000);
// });

// promesa.then((heroe)=> {
//     console.log('Then de la promesa', heroe);
// })
// .catch( err => console.warn(err))

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // Tarea
            // Importar el getHeroeById();
            const heroe = getHeroeById(id);
            heroe != undefined? resolve(heroe) : reject('No se encontró el heroe');
        }, 2000);
    });

}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn)