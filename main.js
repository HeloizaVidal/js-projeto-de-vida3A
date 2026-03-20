const botoes = ducument.querySelectorAll (".botao");

for(let i = 0; i < botoes.legth; i = i + 1){
    botoes[i].onclick = function(){
        for(let j = < botoes.leght; j = j  + 1){
         botoes[j].classList.remove("ativo");    
        }
        botoes[i].classList.add("ativo");
    }
  
}
console.log(botoes);
