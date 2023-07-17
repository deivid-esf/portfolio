const topoBtn = document.querySelector("[data-topo-botao]");
const topoList = document.querySelector("[data-topo-lista]");

topoBtn.addEventListener('click', exibeElemento);

function exibeElemento(){
  let open = "flex";
  let closed = "none";
  let lado = "90deg";
  let deitado = "none";
  
  if (topoList.style.display === closed){
    topoList.style.display = open;
    topoBtn.style.rotate = lado;
  } else{
    topoList.style.display = closed;
    topoBtn.style.rotate = deitado
  }
}