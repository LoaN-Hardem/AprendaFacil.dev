// For...in e For...of
// A maneira correta de iterar sobre arrays e objetos.

// for...of  -> Pega os VALORES de um array.
const cores = ["Vermelho", "Verde", "Azul"];
for (const cor of cores) {
  console.log(cor);
}

// for...in   -> Pega as CHAVES (propriedades) de um objeto.
const carro = { marca: "Fiat", modelo: "Toro" };
for (const chave in carro) {
  // chave = "marca", depois "modelo"
  // carro[chave] = "Fiat", depois "Toro"
  console.log(`${chave}: ${carro[chave]}`);
}