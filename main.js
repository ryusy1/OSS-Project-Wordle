// 전역 상태
let gameState = {
    answer: null,
    attempts: 0,
    gameOver: false,
    guesses: []
};

// 게임 초기화
function initGame() {
    gameState.answer = getAnswer(); // words.js에서 정의
    gameState.attempts = 0;
    gameState.gameOver = false;
    gameState.guesses = [];
    
    clearBoard();
    document.getElementById('message').textContent = '';
}

// 게임 시작
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    
    // 제출 버튼
    const submitBtn = document.getElementById('submit-btn');
    const input = document.getElementById('input');
    
    submitBtn.addEventListener('click', handleSubmit);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
    
    // 다시 시작 버튼
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', initGame);
});

function handleSubmit() {
    const input = document.getElementById('input');
    const guess = input.value.toUpperCase().trim();
    
    // 유효성 검사
    if (guess.length !== 5) {
        showMessage('5글자를 입력해주세요');
        return;
    }
    
    if (!isValidWord(guess)) {
        showMessage('존재하지 않는 단어입니다');
        return;
    }
    
    // 게임 진행
    gameState.guesses.push(guess);
    gameState.attempts++;
    
    const result = checkGuess(guess, gameState.answer);
    renderGuess(guess, result);
    
    // 게임 종료 확인
    if (result.every(r => r === 'correct')) {
        showMessage(`축하합니다! ${gameState.attempts}번 만에 성공!`, 'success');
        gameState.gameOver = true;
    } else if (gameState.attempts >= 6) {
        showMessage(`게임 오버! 정답: ${gameState.answer}`, 'error');
        gameState.gameOver = true;
    }
    
    input.value = '';
    input.focus();
}

function showMessage(text, type = 'error') {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = 'message';
    if (type === 'success') {
        messageEl.classList.add('success');
    }
}

function clearBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
}

function renderGuess(guess, result) {
    const board = document.getElementById('board');
    
    for (let i = 0; i < guess.length; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.textContent = guess[i];
        
        // 결과에 따라 클래스 추가
        if (result[i] === 'correct') {
            tile.classList.add('correct');
        } else if (result[i] === 'present') {
            tile.classList.add('present');
        } else {
            tile.classList.add('absent');
        }
        
        board.appendChild(tile);
    }
}