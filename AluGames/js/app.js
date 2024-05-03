let games = document.querySelectorAll('.dashboard__items__item');

games.forEach(game => {
    game.addEventListener('click', () => {

        let gameClicado = game.querySelector('.dashboard__item__button');
        let imagem = game.querySelector('.dashboard__item__img');

        if (gameClicado.textContent == "Alugar") {
            gameClicado.textContent = "Devolver";
            gameClicado.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented')
        } else {
            gameClicado.textContent = "Alugar";
            gameClicado.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented')
        }
    });
});
