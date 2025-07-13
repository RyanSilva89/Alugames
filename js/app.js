function alterarStatus(id){
let gameClicado=document.getElementById(`game-${id}`);
let imagem=gameClicado.querySelector(`.dashboard__item__img`);
let botao=gameClicado.querySelector(`.dashboard__item__button`);

 if(imagem.classList.contains('dashboard__item__img--rented')){
    const confirmacao= confirm(`Tem certeza que deseja devolver o jogo ${id}`)
    if(confirmacao){

        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert('jogo devolvido com sucesso');
   
    }else{ 
        alert("Devolução cancelada")
    }
}else{
     imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
       contarJogosAlugados();
       
}

function contarJogosAlugados(){
    const jogosAlugados=document.querySelectorAll('.dashboard__item__img--rented')
    console.log(`A quantidade de jogos alugados são ${jogosAlugados.length}`);

}
  

        
