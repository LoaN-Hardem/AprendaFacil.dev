# O que é JSON?

**JSON** é um acrônimo para **J**ava**S**cript **O**bject **N**otation. É um formato de texto leve e de fácil leitura para humanos, projetado para o intercâmbio de dados. Embora tenha "JavaScript" no nome, é um formato completamente independente de linguagem, sendo compatível com a maioria das linguagens de programação modernas.

A sua principal função é transmitir dados entre um servidor e uma aplicação web (ou entre diferentes sistemas), servindo como uma alternativa mais simples e popular ao XML.

### Estrutura e Sintaxe

A estrutura do JSON é baseada na sintaxe de objetos do JavaScript, mas com algumas regras mais rígidas:

1.  **Pares de Chave/Valor:** Os dados são organizados em pares de chave e valor, assim como nos objetos JavaScript.
2.  **Chaves sempre com Aspas Duplas:** Esta é a regra mais importante e uma fonte comum de erros. **Todas as chaves (keys) devem ser strings e obrigatoriamente envoltas em aspas duplas (`"`).** Aspas simples não são permitidas para chaves.
3.  **Valores Permitidos:** Os valores podem ser de um dos seguintes tipos:
    * `string` (sempre com aspas duplas)
    * `number` (inteiro ou de ponto flutuante)
    * `object` (outra estrutura JSON `{}`)
    * `array` (uma lista de valores `[]`)
    * `boolean` (`true` ou `false`, sem aspas)
    * `null` (sem aspas)
4.  **Não são Permitidos:** Funções, `undefined` ou comentários.

### Exemplo de um Arquivo JSON

```json
{
  "idProduto": 1025,
  "nomeProduto": "Headphone Bluetooth",
  "emEstoque": true,
  "preco": 299.90,
  "cor": null,
  "avaliacoes": [
    {
      "autor": "Mariana Costa",
      "nota": 5,
      "comentario": "Excelente qualidade de som e bateria duradoura."
    },
    {
      "autor": "Carlos Souza",
      "nota": 4,
      "comentario": "Confortável, mas o microfone poderia ser melhor."
    }
  ],
  "dimensoes": {
    "altura": 18,
    "largura": 15,
    "unidade": "cm"
  }
}
```

### JSON vs. Objeto JavaScript

| Característica         | JSON                                          | Objeto JavaScript                               |
| ---------------------- | --------------------------------------------- | ----------------------------------------------- |
| **Chaves (Keys)**      | Obrigatório ter aspas duplas (`"chave"`)      | Aspas são opcionais se for um nome válido       |
| **Tipos de Dados**     | Apenas os 6 tipos permitidos                  | Pode incluir `undefined`, funções, Símbolos...  |
| **Comentários**        | Não são permitidos                            | São permitidos (`//` ou `/* */`)                |
| **Vírgula no Final**   | Proibida (ex: `,"chave":"valor"**`**`,`**`}`) | Permitida (trailing comma)                      |

### Onde o JSON é usado?

-   **APIs:** É o formato padrão para troca de dados entre clientes e servidores em APIs REST.
-   **Arquivos de Configuração:** Muitos projetos e ferramentas (como `package.json` no Node.js) usam JSON para armazenar configurações.
-   **Armazenamento de Dados:** Em bancos de dados NoSQL como MongoDB, os documentos são armazenados em um formato similar ao JSON (chamado BSON).