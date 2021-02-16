const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: '10'
    },
    {
        name: 'miau',
        type: 'cat',
        age: '2'
    },
    {
        name: 'gulp',
        type: 'fish',
        age: '1'
    }
]

// Filtrando array utilizando Filter

/*

Array.prototype.filter()
Cria um novo array com todos os elementos que passaram no teste ad função fornecida

var newArray = arr.filter(callback[, thisArg])

*/

const newPets = pets.filter((pet) => {
    return pet.age < 5
})

/*-------------------- Teste 2 --------------------*/

const menorQueCinco = (numero) => {
    return numero < 5
}

const newPets2 = pets.filter(({ age }) => menorQueCinco(age))

/*-------------------------------------------------*/

console.log("Mostrando Array Pets completo")
console.log(pets)

console.log("Mostrando Array newPets criado utilizando Filter")
console.log(newPets)

console.log("Mostrando Array newPets2 criado utilizando Filter")
console.log(newPets2)
