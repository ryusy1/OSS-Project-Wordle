// ===== ui.js =====
// 역할: 기초적인 화면 렌더링만 (모던 스타일)

// 게임 보드에 타일 추가 (행 단위)
export function renderRow(guesses, results) {
  const board = document.getElementById('board');
  
  guesses.forEach((guess, rowIndex) => {
    const result = results[rowIndex];
    
    for (let i = 0; i < guess.length; i++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.textContent = guess[i];
      
      // 결과에 따라 클래스 추가
      if (result[i] === 'correct') {
        tile.classList.add('correct');
      } else if (result[i] === 'present') {
        tile.classList.add('present');
      } else if (result[i] === 'absent') {
        tile.classList.add('absent');
      } else {
        tile.classList.add('filled');
      }
      
      board.appendChild(tile);
    }
  });
}

// 단일 시도 렌더링
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
export function showMessage(text, type = 'info') {
  const messageEl = document.getElementById('message');
  messageEl.textContent = text;
  messageEl.className = 'message';
  
  if (type === 'success') {
    messageEl.classList.add('success');
  } else if (type === 'error') {
    messageEl.classList.add('error');
  } else {
    messageEl.classList.add('info');
  }
  
  // 3초 후 메시지 사라지기
  if (type !== 'success' && type !== 'error') {
    setTimeout(() => {
      messageEl.textContent = '';
    }, 3000);
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
    messageEl.innerHTML = `
      <span style="font-size: 20px;">🎉</span><br>
      축하합니다!<br>
      <span style="font-size: 14px; opacity: 0.8;">${attempts}번 만에 성공했습니다</span>
    `;
    messageEl.className = 'message success';
  } else {
    messageEl.innerHTML = `
      <span style="font-size: 20px;">😢</span><br>
      게임 오버!<br>
      <span style="font-size: 14px; opacity: 0.8;">정답: <strong>${answer}</strong></span>
    `;
    messageEl.className = 'message error';
  }
}

// 입력 비활성화
export function disableInput(disabled) {
  const input = document.getElementById('input');
  const submitBtn = document.getElementById('submit-btn');
  
  input.disabled = disabled;
  submitBtn.disabled = disabled;
  
  if (!disabled) {
    input.focus();
  }
}

// 입력창 포커스
export function focusInput() {
  const input = document.getElementById('input');
  input.focus();
}

// 버튼 로딩 상태
export function setButtonLoading(loading) {
  const submitBtn = document.getElementById('submit-btn');
  
  if (loading) {
    submitBtn.disabled = true;
    submitBtn.textContent = '로딩...';
  } else {
    submitBtn.disabled = false;
    submitBtn.textContent = '입력';
  }
}

// 에러 메시지 (자동 사라짐)
export function showError(message) {
  showMessage(message, 'error');
}

// 성공 메시지 (자동 사라지지 않음)
export function showSuccess(message) {
  showMessage(message, 'success');
}

// 정보 메시지 (자동 사라짐)
export function showInfo(message) {
  showMessage(message, 'info');
}
