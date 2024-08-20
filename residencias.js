const prompt = require("prompt-sync")();
let residencias = [];
const nomeInvalido = (nome) => nome == "";
const indiceInvalido = (indice) =>
  indice < 0 || indice >= residencias.length || isNaN(indice);

const modelo = () => {
  const bairro = prompt("Digite o nome do bairro: ");
  const rua = prompt("Digite o nome da rua: ");
  const numero = prompt("Digite o numero da casa: ");

  const moradores = [];
  while (true) {
    const morador = prompt("Digite o nome do morador ou digite FIM");

    if (morador == "fim") {
      break;
    }
    moradores.push(morador);
  }

  if (bairro != "" && rua != "" && !isNaN(numero) && moradores.length > 0) {
    return {
      bairro,
      rua,
      numero,
      moradores,
    };
  }

  console.log("Dados inválidos");
};
const criar = () => {
  const novo = modelo();
  if (novo) {
    residencias.push(novo);
    console.log("O residencia foi criado com sucesso");
  }
};

const atualizar = () => {
  while (true) {
    if (residencias.length == 0) {
      console.log("Lista de residencias vazia");
      break;
    }
    listar();
    const indice =
      parseInt(prompt("Qual é o índice da residencia que deseja atualizar? ")) -
      1;
    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
    } else {
      const data = residencias[indice];
      console.log("Somente aperte ENTER se não quiser atualizar");
      const novoBairro = prompt(
        "Qual é o novo nome da bairro? (atual: " + data.bairro + ") "
      );
      if (!nomeInvalido(novoBairro)) {
        data.bairro = novoBairro;
      }
      const novaRua = prompt(
        "Qual é o novo nome da rua? (atual: " + data.rua + ") "
      );
      if (!nomeInvalido(novaRua)) {
        data.rua = novaRua;
      }
      const novoNumero = prompt(
        "Qual é o novo numero da casa? (atual: " + data.numero + ") "
      );

      if (!nomeInvalido(novoNumero)) {
        data.numero = novoNumero;
      }

    const moradores = [];
  while (true) {
    const novosMoradores = prompt("Digite o nome dos novos moradores ou digite fim");

    if (novosMoradores == "fim") {
      data.moradores = moradores
      break;
    }
    moradores.push(novosMoradores);
  }

      residencias[indice] = data;
      console.log("Residencia atualizada com sucesso.");
      break;
    }
  }
};

const listar = () => {
  if (residencias.length == 0) {
    console.log("Nenhuma residencia adicionada ainda");
  }
  residencias.forEach((el, i) => {
    console.log(`id: ${i + 1},
        bairro: ${el.bairro},
        rua: ${el.rua},
        numero: ${el.numero},
        moradores: ${el.moradores}`);
  });
};

const remover = () => {
  listar();

  const numero = prompt("Qual o numero da residencia que deseja remover? ");
  const bairro = prompt("Qual o bairro da residencia que deseja remover? ");

  let moradorEncontrado = false;
  residencias.forEach((el, i) => {
    if (el.numero === numero && el.bairro === bairro) {
      residencias.splice(el, 1);
      moradorEncontrado = true;
      console.log(
        "residencia no bairro: " +
          bairro +
          ", número: " +
          numero +
          " foi apagada."
      );
    }
  });
  if (!moradorEncontrado) {
    console.log("residencia não encontrada.");
  }
};

module.exports = {
  criar,
  atualizar,
  listar,
  remover,
};