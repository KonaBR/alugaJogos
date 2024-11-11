function alterarStatus(gameId) {
    const gameItem = document.getElementById(`game-${gameId}`);
    const button = gameItem.querySelector('.dashboard__item__button');
    const imgContainer = gameItem.querySelector('.dashboard__item__img');

    if (button.classList.contains('dashboard__item__button--return')) {
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar';
        imgContainer.classList.remove('dashboard__item__img--rented');

    } else {

        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
        imgContainer.classList.add('dashboard__item__img--rented');
        
    }
}