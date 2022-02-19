const pre_carregamento = document.querySelector("div.pre-carregamento");

  function preCarregamento(){
    pre_carregamento.getElementsByClassName.opacity = "0";

   setTimeout(() =>{
    pre_carregamento.style.display = "none";
   }, 500);
}