let experiencias = [];
const experienciasApi = 'experiencias.json';
getExperiencias();

async function getExperiencias(){
  const res = await fetch(experienciasApi);
  experiencias = await res.json()

  exibirExperiencias(experiencias);
}

const elementoParaExibirExperiencias = document.querySelector(".experiencias")
function exibirExperiencias(listaDeExperiencias){
  listaDeExperiencias.forEach(experiencia => {
    elementoParaExibirExperiencias.innerHTML += `
    <div class="experiencia">
    <div class="experiencia__imagem">
      <img src="${experiencia.imagem}" alt="${experiencia.alt}">
    </div>
    <div class="experiencia__conteudo">
      <h4 class="experiencia__titulo">${experiencia.titulo}</h4>
      <p class="experiencia__descricao">${experiencia.descricao}</p>
      <div class="experiencia__botoes">
        <a href="${experiencia.repositorio}" class="experiencia__botao experiencia__botao--repositorio" target="_blank">Repositório</a>
        <a href="${experiencia.demo}"class="experiencia__botao experiencia__botao--demo" target="_blank">Ver demo</a>
      </div>
    </div>
  </div>
    `
  });
}