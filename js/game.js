export class WordleGame {
    constructor(dictionary) {
        // 텍스트 일괄 대문자 변경 및 시도 횟수 6번
        this.dictionary = new Set(dictionary.map(word => word.toUpperCase()));
        this.maxAttempts = 6;
        this.init();
    }
        // 새로고침시 게임 초기화
    init() {
        const dictArray = Array.from(this.dictionary);
        this.targetWord = dictArray[Math.floor(Math.random() * dictArray.length)];
        this.attempts = 0;
        this.isGameOver = false;
    }

    submit(input) {
        const guess = input.toUpperCase();
        
        // 1. 검증 로직 분리
        const error = this.validate(guess);
        if (error) return { success: false, message: error };

        this.attempts++;
        const result = this.checkLogic(this.targetWord, guess);
        
        // 2. 결과 판정
        if (guess === this.targetWord) this.isGameOver = true;
        else if (this.attempts >= this.maxAttempts) this.isGameOver = true;

        return {
            success: true,
            result,
            remaining: this.maxAttempts - this.attempts,
            isGameOver: this.isGameOver
        };
    }

    validate(guess) {
        if (this.isGameOver) return "게임이 이미 끝났습니다.";
        if (guess.length !== 5) return "5글자를 입력해야 합니다.";
        if (!this.dictionary.has(guess)) return "단어장에 없는 단어입니다.";
        return null;
    }
    // 게임 로직 부분
    checkLogic(target, guess) {
        const result = Array(5).fill('absent');
        const targetCounts = {};

        // 1단계: 타겟 단어의 알파벳별 빈도수 측정
        for (const char of target) {
            targetCounts[char] = (targetCounts[char] || 0) + 1;
        }

        // 2단계: 위치와 글자가 모두 일치하는 'correct' 우선 확정
        for (let i = 0; i < 5; i++) {
            if (guess[i] === target[i]) {
                result[i] = 'correct';
                targetCounts[guess[i]]--;
            }
        }

        // 3단계: 위치는 다르지만 포함되어 있는 'present' 판정
        for (let i = 0; i < 5; i++) {
            // 이미 correct 판정을 받은 위치는 건너뜀
            if (result[i] === 'correct') continue;

            const char = guess[i];
            // 타겟 단어에 남은 해당 알파벳이 있다면 present로 판정하고 카운트 차감
            if (targetCounts[char] > 0) {
                result[i] = 'present';
                targetCounts[char]--;
            }
        }

        // UI에서 렌더링하기 편하도록 글자와 판정 상태를 객체로 묶어서 반환
        return guess.split('').map((char, index) => ({
            char,
            status: result[index]
        }));
    }
}