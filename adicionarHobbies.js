let hobbies = [];
const apiDeHobbies = "hobbies.json";
getBuscarHobbies();

async function getBuscarHobbies(){
  const res = await fetch(apiDeHobbies);
  hobbies = await res.json();

  exibirHobbies(hobbies);
}

let elementoParaExibirHobbies = document.querySelector(".hobbies");

function exibirHobbies (listaDeHobbies){
  listaDeHobbies.forEach(hobby => {
    elementoParaExibirHobbies.innerHTML += `
    <div class="hobby">
      <img src="${hobby.imagem}" alt="${hobby.alt}" class="hobby__imagem">
      <p class="hobby__nome">${hobby.titulo}</p>
    </div>
    `
  });
}