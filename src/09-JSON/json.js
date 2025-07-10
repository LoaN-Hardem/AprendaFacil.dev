/*
 * Arquivo de exemplo para explicar os métodos JSON.stringify() e JSON.parse()
 */

// Vamos começar com um objeto JavaScript normal.
// Note que ele tem diferentes tipos de dados e as chaves não usam aspas.
const produtoJS = {
  id: 1025,
  nome: "Headphone Bluetooth",
  emEstoque: true,
  // A propriedade 'preco' será convertida para number no JSON
  preco: 299.90,
  // A propriedade 'cor' com valor null é válida em JSON
  cor: null,
  // Funções e 'undefined' são ignorados pelo stringify
  ativarGarantia: () => console.log("Garantia ativada!"),
  dataFabricacao: undefined,
  tags: ["audio", "sem-fio", "tecnologia"]
};

console.log("================ JSON.stringify() ================");
console.log("Converte um valor/objeto JavaScript em uma STRING no formato JSON.");
console.log("");

// 1. Uso básico do stringify
const jsonString = JSON.stringify(produtoJS);

console.log("1. Objeto convertido para string JSON:");
console.log(jsonString);
console.log("-> Tipo do dado:", typeof jsonString); // O resultado é uma string!
console.log("");
// Note que as propriedades 'ativarGarantia' e 'dataFabricacao' foram removidas.

// 2. Uso do parâmetro 'space' para formatar (pretty-print)
// Isso é muito útil para depuração e para salvar arquivos de forma legível.
const jsonStringFormatado = JSON.stringify(produtoJS, null, 2); // Usa 2 espaços para indentação

console.log("2. String JSON formatada com 2 espaços de indentação:");
console.log(jsonStringFormatado);
console.log("");


console.log("================ JSON.parse() ================");
console.log("Converte uma STRING no formato JSON de volta para um valor/objeto JavaScript.");
console.log("");

// Vamos usar a string JSON que criamos anteriormente.
const jsonParaConverter = '{"id":1025,"nome":"Headphone Bluetooth","emEstoque":true,"preco":299.9,"cor":null,"tags":["audio","sem-fio","tecnologia"]}';

// 1. Uso básico do parse
const objetoConvertido = JSON.parse(jsonParaConverter);

console.log("1. String JSON convertida de volta para um objeto JavaScript:");
console.log(objetoConvertido);
console.log("-> Tipo do dado:", typeof objetoConvertido); // Agora é um objeto!
console.log("");

// Agora podemos acessar as propriedades como em qualquer objeto JS
console.log("Acessando uma propriedade: objetoConvertido.nome =", objetoConvertido.nome);
console.log("Acessando um item do array: objetoConvertido.tags[1] =", objetoConvertido.tags[1]);
console.log("");


// 2. Lidando com erros
// JSON.parse() lançará um erro se a string não for um JSON válido.
// Exemplo de JSON inválido (usa aspas simples nas chaves)
const jsonInvalido = "{'id': 999, 'erro': 'Uso de aspas simples'}";

console.log("2. Tentando fazer o parse de um JSON inválido...");

try {
  JSON.parse(jsonInvalido);
} catch (error) {
  console.error("-> Erro capturado! O formato da string não é um JSON válido.");
  // console.error(error); // Descomente para ver o erro completo
}
console.log("");

/*
 * RESUMO DO CICLO:
 *
 * Objeto JavaScript  ---- (JSON.stringify) ---->  String JSON
 *
 * String JSON       ---- (JSON.parse)     ---->  Objeto JavaScript
 *
 */