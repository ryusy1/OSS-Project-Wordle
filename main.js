import fs from 'fs';
import { WordleGame } from './game.js';

// 1. 파일을 동기 방식으로 읽어옵니다.
const text = fs.readFileSync('dictionary.txt', 'utf8');

// 2. 줄바꿈 기준으로 잘라 배열로 변환하고 5글자 단어만 걸러냅니다.
const wordList = text.split(/\r?\n/)
                     .map(word => word.trim())
                     .filter(word => word.length === 5);

// 3. 게임 실행
const game = new WordleGame(wordList);

console.log("게임 시작! 총 단어 개수:", game.dictionary.size);
const result = game.submit("ABACK");
console.log(result);