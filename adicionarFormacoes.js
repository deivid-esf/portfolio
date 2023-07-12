let formacoes = [];
const apiDeFormacoes = "formacoes.json";
getbuscarFormacoes();

async function getbuscarFormacoes() {
  const res = await fetch(apiDeFormacoes);
  formacoes = await res.json();

  exibirFormacoes(formacoes);
}

let elementoParaExibirFormacoes = document.querySelector(".formacoes");
function exibirFormacoes(listaDeFormacoes) {
  listaDeFormacoes.forEach(formacao => {
    elementoParaExibirFormacoes.innerHTML += `
    <div class="formacao">
            <div class="formacao__imagem">
              <img src="${formacao.imagem}" alt="${formacao.alt}">
            </div>
            <h4 class="formacao__titulo">${formacao.titulo}</h4>
            <p class="formacao__descricao">${formacao.ano} <span class="formacao__descricao--instituicao">${formacao.nome}</span></p>
    </div>
  `;
  });
}
