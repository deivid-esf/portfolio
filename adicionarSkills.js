let skills = [];
const apiDeSkills = 'skills.json';
getBuscarSkillsDaAPI();

async function getBuscarSkillsDaAPI(){
  const res = await fetch(apiDeSkills);
  skills = await res.json();

  exibirSkillsNaTela(skills);
}

let elementoParaExibirSkills = document.querySelector(".skills");

function exibirSkillsNaTela(listaDeSkills){
  listaDeSkills.forEach(skill => {
    elementoParaExibirSkills.innerHTML += `
    <div class="skill">
       <img src="${skill.imagem}" alt="${skill.alt}" class="skill__icone">
       <p class="skill__nome">${skill.titulo}</p>
   </div>
    `
  });
}
