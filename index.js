const prompt = require("prompt-sync")();
const { criar, listar, atualizar, remover } = require("./residencias.js");

while (true) {
  console.log(`
    1 - Cadastrar residência
    2 - Listar residências
    3 - Atualizar residência
    4 - Remover residência
    0 - Sair
    `);
  const opcao = prompt();

  switch (opcao) {
    case "1":
      criar();
      break;
    case "2":
      listar();
      break;
    case "3":
      atualizar();
      break;
    case "4":
      remover();
      break;
    case "0":
      process.exit();
      break;

    default:
      console.log("Opção inválida");
      break;
  }
}