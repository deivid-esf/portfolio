const topoBtn = document.querySelector("[data-topo-botao]");
const topoList = document.querySelector("[data-topo-lista]");

topoBtn.addEventListener('click', exibeElemento);

function exibeElemento(){
  let open = "flex";
  let closed = "none";
  let lado = "90deg";
  let deitado = "0deg";

  
  if (topoList.style.display === closed){
    topoList.style.display = open;
    topoBtn.style.rotate = lado;
  } else if(topoList.style.display === open){
    topoList.style.display = closed;
    topoBtn.style.rotate = deitado
  }
}

document.addEventListener('click', function(event) {
  const target = event.target;
  
  // Verificar se o clique ocorreu fora do menu
  if (window.innerWidth < 768 && !topoBtn.contains(target) && !topoList.contains(target)) {
    // Fechar o menu
    topoList.style.display = "none";
  }
});