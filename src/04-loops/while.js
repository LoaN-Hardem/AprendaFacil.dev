/**
 * ARQUIVO DE EXPLICAÇÃO: O loop 'while'
 *
 * Um guia simples para entender como e quando usar os loops 'while' e 'do...while'.
 * Data: 10 de julho de 2025
 */

// O que é o loop 'while'?
// O nome "while" significa "enquanto" em inglês. É exatamente isso que ele faz:
// Ele repete um bloco de código ENQUANTO uma determinada condição for verdadeira.
//
// A estrutura é:
// while (condição) {
//   // código a ser executado
// }
//
// A condição é verificada ANTES de cada execução do bloco. Se for falsa logo de início, o bloco nunca roda.

//----------------------------------------------------------------

// Exemplo 1: Um contador simples
// O caso de uso mais básico para entender o funcionamento.

console.log("--- Exemplo 1: Contando até 4 ---");
let contador = 0; // 1. Inicializamos uma variável fora do loop

while (contador < 5) { // 2. A condição é verificada aqui
  console.log(`O contador agora é ${contador}`);
  contador++; // 3. ESSENCIAL: Atualizamos a variável para que o loop eventualmente pare.
}
// Saída:
// O contador agora é 0
// O contador agora é 1
// O contador agora é 2
// O contador agora é 3
// O contador agora é 4

console.log("Loop finalizado!");
console.log("\n");

// CUIDADO: O PERIGO DO LOOP INFINITO
// Se você esquecer de atualizar a variável da condição (esquecer o `contador++`),
// a condição `contador < 5` será sempre verdadeira e o loop NUNCA terminará, travando seu programa!

//----------------------------------------------------------------

// Exemplo 2: Quando usar 'while'?
// 'while' é perfeito quando você NÃO SABE quantas vezes o loop precisa rodar,
// mas sabe qual é a CONDIÇÃO DE PARADA.
//
// Imagine um jogo onde você precisa rolar um dado até tirar o número 6.

console.log("--- Exemplo 2: Rolando um dado até tirar 6 ---");

let dadoRolado = 0;
let tentativas = 0;

while (dadoRolado !== 6) {
  // Gera um número aleatório de 1 a 6
  dadoRolado = Math.floor(Math.random() * 6) + 1;
  tentativas++;
  console.log(`Tentativa #${tentativas}: Você tirou ${dadoRolado}`);
}

console.log(`Parabéns! Você tirou um 6 depois de ${tentativas} tentativas!`);
console.log("\n");

//----------------------------------------------------------------

// Variação: O loop 'do...while'
// É quase igual ao 'while', mas com uma grande diferença:
// Ele executa o bloco de código PRIMEIRO e só DEPOIS verifica a condição.
//
// Isso garante que o código dentro do loop rode PELO MENOS UMA VEZ.

console.log("--- Exemplo 3: O 'do...while' ---");

let i = 5;

// A condição (i < 5) já é falsa, mas o bloco vai rodar uma vez mesmo assim.
do {
  console.log(`Este código rodou com i = ${i}`);
  i++;
} while (i < 5);

console.log("Loop 'do...while' finalizado. Note que o código rodou uma vez.");
console.log("\n");

// Resumo Final: 'for' vs 'while'
//
// - Use 'for': Quando você sabe exatamente quantas vezes quer repetir.
//   Ex: "Percorra todos os 50 itens de uma lista" ou "Faça isso 10 vezes".
//
// - Use 'while': Quando você não sabe o número de repetições, mas conhece a condição para parar.
//   Ex: "Continue pedindo a senha até o usuário acertar" ou "Continue rodando enquanto houver energia".
//
// - Use 'do...while': Igual ao 'while', mas quando você precisa que a ação aconteça pelo menos uma vez antes da checagem.
//   Ex: "Mostre o menu de opções uma vez e continue mostrando até o usuário escolher 'sair'".