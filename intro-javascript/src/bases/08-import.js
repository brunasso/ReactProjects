import heroes, { owners } from '../data/heroes'

// const getHeroeById = (id) => {
//     return heroes.find(heroe => {
//         return heroe.id == id
//     })
// }

// console.log(owners);

const getHeroeById = (id) => heroes.find(heroe => heroe.id == id )

// console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner == owner )

// console.log(getHeroesByOwner('DC'));

export default getHeroeById;