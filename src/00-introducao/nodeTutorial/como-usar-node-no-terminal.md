# 🚀 Como rodar JavaScript no terminal com Node.js

Se você quer rodar seus arquivos `.js` direto pelo terminal (sem navegador), você precisa do **Node.js** instalado no seu sistema. Aqui está um passo a passo simples e direto.

---

## ✅ O que é o Node.js?

O **Node.js** é um ambiente de execução para JavaScript fora do navegador. Ele permite que você rode arquivos `.js` direto no terminal, além de usar ferramentas modernas de desenvolvimento com `npm`.

---

## 🧭 Como instalar o Node.js

### Acesse o site oficial:
🔗 https://nodejs.org

Baixe a versão recomendada **LTS** (Long Term Support) e siga os passos da instalação.

Durante a instalação, o `npm` (Node Package Manager) será instalado automaticamente junto com o Node.

---

## 🔍 Verificando a instalação

Abra o terminal e digite:

```bash
node -v
# Exemplo: v20.11.1

npm -v
# Exemplo: 10.2.4
```

Se aparecerem as versões, você está pronto!

---

## 🧪 Como rodar um arquivo `.js`

1. Crie um arquivo chamado `teste.js` com o conteúdo abaixo:

```js
console.log("Olá, mundo!");
```

2. Execute no terminal:

```bash
node teste.js
```

Você verá a saída:

```
Olá, mundo!
```

---

## ⚙️ Preciso usar `npm install`?

### ❌ NÃO, se você só quer rodar arquivos `.js`
Você só precisa do Node instalado. Nada além.

### ✅ SIM, se você quiser:
- Instalar bibliotecas externas (ex: `npm install axios`)
- Criar um projeto mais estruturado com `npm init`
- Usar ferramentas como ESLint, Prettier, Babel, etc.

---

## 📦 Criando um `package.json` (opcional)

Se quiser organizar seu projeto com npm:

```bash
npm init -y
```

Isso cria o arquivo `package.json`, que guarda informações sobre seu projeto e dependências.

---

## 🧠 Dica final

Se você está aprendendo, comece só com os arquivos `.js` e use o Node para rodar. Mantenha simples.

Depois, conforme for evoluindo, você pode explorar o uso de bibliotecas e ferramentas com npm.

---

> Aprender programação não precisa ser complicado. Comece pelo simples, e vá subindo o nível com calma!
