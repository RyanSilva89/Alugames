function alterarStatus(id){
let gameClicado=document.getElementById(`game-${id}`);
let imagem=gameClicado.querySelector(`.dashboard__item__img`);
let botao=gameClicado.querySelector(`.dashboard__item__button`);
let nomeDoJogo=gameClicado.querySelector(`.dashboard__item__name`);
alert(gameClicado.textContent);
}
