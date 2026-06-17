let gameBoard = document.querySelector('.board');
let gameCharacters = ['😈', '😈', '🫠', '🫠', '🐶', '🐶', '🫦', '🫦', '🤦‍♂️', '🤦‍♂️', '😒', '😒']; 
let randomCharacters = gameCharacters.sort(() => Math.random() - 0.5);
let selectedValue = [];
let lockBoard = false;

function initializeBoard() {
    gameBoard.innerHTML = '';  
    randomCharacters = gameCharacters.sort(() => Math.random() - 0.5);  
    selectedValue = [];

    randomCharacters.forEach((item) => {
        let card = document.createElement('div');
        card.classList.add('card');

        let front = document.createElement('div');
        front.classList.add('front');

        let back = document.createElement('div');
        back.classList.add('back');
        back.textContent = item;

        card.appendChild(front);
        card.appendChild(back);
        gameBoard.append(card);

        card.addEventListener('click', flipCard);
    });
}

function flipCard() {
    if (lockBoard || this.classList.contains('flip')) return;  
    this.classList.add('flip');
    selectedValue.push(this);

    if (selectedValue.length === 2) {
        lockBoard = true;  
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    if (selectedValue[0].querySelector('.back').textContent === selectedValue[1].querySelector('.back').textContent) {
        selectedValue[0].removeEventListener('click', flipCard);
        selectedValue[1].removeEventListener('click', flipCard);
    } else {
        selectedValue[0].classList.remove('flip');
        selectedValue[1].classList.remove('flip');
    }

    selectedValue = [];
    lockBoard = false;  
}

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', initializeBoard);
initializeBoard();
