
let playerScore = 0
let cpuScore = 0

const scoreMessage = document.getElementById('scoremessage')
const score = document.getElementById('score')
const endGameModal = document.getElementById('modal')
const modalTitle = document.getElementById('modalTitle')

const restartBtn = document.getElementById('restartBtn')
restartBtn.addEventListener('click', restartGame)

const overlay = document.getElementById('overlay')
overlay.addEventListener('click', closeEndGameModal)

const rockBtn = document.getElementById('rock')
rockBtn.addEventListener('click', () => handleClick('Rock'))
const paperBtn = document.getElementById('paper')
paperBtn.addEventListener('click', () => handleClick('Paper'))
const scissorsBtn = document.getElementById('scissors')
scissorsBtn.addEventListener('click', () => handleClick('Scissors'))


function handleClick(playerWeapon) {
    if (isGameOver()) {
        openEndGameModal(playerScore);
        return;
    }

    let weapons = ['Rock', 'Paper', 'Scissors'];
    let cpuWeapon = weapons[Math.floor(Math.random() * 3)];
    duel(playerWeapon, cpuWeapon);

    if (isGameOver()) {
        openEndGameModal(playerScore);
        return;
    }
}

function isGameOver() {
    if (playerScore == 20 || cpuScore == 20) {
        return true
    } else {
        return false
    }
}

function restartGame() {
    playerScore = 0;
    cpuScore = 0;
    updateScore();
    scoreMessage.textContent = 'First to 5 wins!';
    overlay.classList.remove('active');
    endGameModal.classList.remove('active');
    playerSelection.classList = '';
    cpuSelection.classList = '';
}

function duel(playerWeapon, cpuWeapon) {
    showSelections(playerWeapon, cpuWeapon);
    if (playerWeapon == cpuWeapon) {
        scoreMessage.textContent = "Tie!";
    } else if ((playerWeapon == 'Paper' && cpuWeapon == 'Rock') || (playerWeapon == 'Rock' && cpuWeapon == 'Scissors')
        || (playerWeapon == 'Scissors' && cpuWeapon == 'Paper')) {
        scoreMessage.textContent = 'You won! ' + playerWeapon + ' beats ' + cpuWeapon;
        playerScore++;
        updateScore();
    } else if ((playerWeapon == 'Rock' && cpuWeapon == 'Paper') || (playerWeapon == 'Scissors' && cpuWeapon == 'Rock')
        || (playerWeapon == 'Paper' && cpuWeapon == 'Scissors')) {
        scoreMessage.textContent = 'You lost! ' + cpuWeapon + ' beats ' + playerWeapon;
        cpuScore++;
        updateScore();
    }
}

function showSelections(playerWeapon, cpuWeapon) {
    const playerSelection = document.getElementById('playerSelection');
    const cpuSelection = document.getElementById('cpuSelection');

    playerSelection.className = '';
    cpuSelection.className = '';

    if (playerWeapon == 'Rock') {
        playerSelection.classList.add('weaponImage');
        playerSelection.classList.add('rock');
    } else if (playerWeapon == 'Paper') {
        playerSelection.classList.add('weaponImage');
        playerSelection.classList.add('paperPlayer');
    } else if (playerWeapon == 'Scissors') {
        playerSelection.classList.add('weaponImage')
        playerSelection.classList.add('scissorsPlayer');
    }

    if (cpuWeapon == 'Rock') {
        cpuSelection.classList.add('weaponImage');
        cpuSelection.classList.add('rockCPU');
    } else if (cpuWeapon == 'Paper') {
        cpuSelection.classList.add('weaponImage');
        cpuSelection.classList.add('paper');
    } else if (cpuWeapon == 'Scissors') {
        cpuSelection.classList.add('weaponImage');
        cpuSelection.classList.add('scissorsCPU');
    }
}

function updateScore() {
    score.textContent = playerScore + ' - ' + cpuScore;
}

function openEndGameModal(playerScore) {
    endGameModal.classList.add('active')
    overlay.classList.add('active')

    if (playerScore == 5) {
        modalTitle.textContent = 'You won!'
    } else {
        modalTitle.textContent = 'You lose!'
    }
}

function closeEndGameModal() {
    endGameModal.classList.remove('active')
    overlay.classList.remove('active')
}
