const person = {
    firstName: 'Loan',
    lastName: 'Hardem',
    age: 20,
    height: 1.70,
    isMarried: false,
    girlfriend: 'Isadora',
    address: {
        street: 'Rua Ana Benedita de Jesus Medeiros',
        number: 10,
        neighborhood: 'Centro',
        city: 'Rosario do Ivai',
        state: 'PR',
        country: 'Brasil',
    },
    hobbies: ['filosofia', 'leitura', 'musica'],
    languages: ['Português', 'English'],
}

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const height = person.height;
// const isMarried = person.isMarried;
// const girlfriend = person.girlfriend;
// const address = person.address;
// const street = address.street;
// const number = address.number;
// const neighborhood = address.neighborhood;
// const city = address.city;
// const state = address.state;
// const country = address.country;
// const hobbies = person.hobbies;
// const languages = person.languages;

//esses comentários acima podem ser substituidos por:
const { firstName, lastName, age, height, isMarried, girlfriend, address, hobbies, languages } = person;

// Aprenda mais no link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
// Ou acesse o PDF AtribuiçãoViaDesestruturação para aprender mais sobre desestruturação.

console.log(person);

const todos = [
    {
        id: 1,
        title: 'Todo 1',
        description: 'Description 1',
        done: false,
    },
    {
        id: 2,
        title: 'Todo 2',
        description: 'Description 2',
        done: false,
    },
    {
        id: 3,
        title: 'Todo 3',
        description: 'treinar',
        done: false,
    },
]

const [todo1, todo2, todo3] = todos;

// const { id, title, description, done } = todos[2];
//     console.log(id);
//     console.log(title);
//     console.log(description);
//     console.log(done);

console.log(todo3.description);
console.log(todos[2].description);
