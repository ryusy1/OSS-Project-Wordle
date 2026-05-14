// ===== ui.js =====
// 역할: 기초적인 화면 렌더링

// 게임 보드에 타일 추가
export function renderGuess(guess, result) {
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

// 메시지 표시
export function showMessage(text, type = 'error') {
  const messageEl = document.getElementById('message');
  messageEl.textContent = text;
  messageEl.className = 'message';
  
  if (type === 'success') {
    messageEl.classList.add('success');
  } else if (type === 'error') {
    messageEl.classList.add('error');
  }
}

// 게임 보드 초기화
export function clearBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
}

// 입력창 초기화
export function clearInput() {
  const input = document.getElementById('input');
  input.value = '';
  input.focus();
}

// 입력값 가져오기
export function getInputValue() {
  const input = document.getElementById('input');
  return input.value.trim().toUpperCase();
}

// 게임 종료 화면
export function showGameOver(won, answer, attempts) {
  const messageEl = document.getElementById('message');
  
  if (won) {
    messageEl.textContent = `🎉 축하합니다! ${attempts}번 만에 성공!`;
    messageEl.className = 'message success';
  } else {
    messageEl.textContent = `❌ 게임 오버! 정답: ${answer}`;
    messageEl.className = 'message error';
  }
}

// 입력 비활성화
export function disableInput(disabled) {
  const input = document.getElementById('input');
  const submitBtn = document.getElementById('submit-btn');
  
  input.disabled = disabled;
  submitBtn.disabled = disabled;
}