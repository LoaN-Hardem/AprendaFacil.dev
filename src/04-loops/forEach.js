/**
 * ARQUIVO DE EXPLICAÇÃO: O método forEach()
 *
 * Um guia simples e direto para entender e usar o forEach em arrays.
 * Data: 10 de julho de 2025
 */

// O que é o forEach?
// Pense no forEach como uma forma mais limpa e moderna de fazer um loop 'for' em um array.
// O nome dele já diz tudo: "PARA CADA" elemento do array, ele executa uma função que você define.
// Ele é um método que existe em todos os arrays.

//----------------------------------------------------------------

// Exemplo 1: Uso Básico
// Vamos apenas imprimir cada item de uma lista de compras.

const listaDeCompras = ['Leite', 'Pão', 'Ovos', 'Café'];

console.log("--- Exemplo 1: Imprimindo cada item ---");

listaDeCompras.forEach(item => {
  // A função (aqui uma arrow function) é executada para cada 'item'.
  console.log(`- ${item}`);
});
// Saída:
// - Leite
// - Pão
// - Ovos
// - Café

console.log("\n"); // Apenas para pular uma linha na saída.

//----------------------------------------------------------------

// Exemplo 2: Acessando o item E o seu índice (posição)
// A função que você passa para o forEach pode receber dois parâmetros principais:
// 1º) O elemento atual (o valor do item)
// 2º) O índice do elemento (sua posição no array: 0, 1, 2, ...)

const notas = [10, 8.5, 7, 9.5];

console.log("--- Exemplo 2: Mostrando a nota e sua posição ---");

notas.forEach((nota, indice) => {
  // O primeiro parâmetro é o valor, o segundo é a posição.
  console.log(`A nota do aluno ${indice + 1} foi ${nota}.`);
});
// Saída:
// A nota do aluno 1 foi 10.
// A nota do aluno 2 foi 8.5.
// A nota do aluno 3 foi 7.
// A nota do aluno 4 foi 9.5.

console.log("\n");

//----------------------------------------------------------------

// Pontos Importantes sobre o forEach:

// 1. Ele SEMPRE percorre o array inteiro.
//    Você não pode usar 'break' (parar) ou 'continue' (pular) dentro de um forEach.
//    Se você precisa dessa flexibilidade, um loop 'for...of' é uma opção melhor.

// 2. Ele NÃO retorna um novo array.
//    O forEach serve para EXECUTAR uma ação para cada item (como imprimir no console,
//    salvar no banco de dados, etc.), mas ele não cria uma nova lista modificada.
//    Para criar um novo array a partir de um existente, use o método `map()`.

// Resumo final:
// Use o `forEach` quando você quiser fazer algo para cada item de um array
// e não precisa parar no meio do caminho ou criar um novo array como resultado.
// É uma sintaxe limpa e muito legível!