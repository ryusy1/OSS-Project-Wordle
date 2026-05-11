# OSS-Project-Wordle
# 🎮 Wordle Clone Project (Git Collaboration Focus)

## 📌 프로젝트 소개

본 프로젝트는 인기 단어 맞추기 게임인 Wordle을 클론코딩하며,
Git과 GitHub를 활용한 협업 능력을 향상시키는 것을 목표로 합니다.

단순한 게임 구현을 넘어서, 브랜치 전략, Pull Request, 코드 리뷰 등
실제 개발 환경에서 사용되는 협업 방식을 적극적으로 적용합니다.

---

## 👥 팀 구성 및 역할

| 노재현 | 게임 로직  | 정답 판별, 시도 횟수 관리, 게임 상태 제어 |
| 김현수 | UI     | 게임 화면 구성, 타일 디자인, 색상 표시   |
| 류승열 | 데이터 처리 | 단어 리스트 관리, 단어 유효성 검사      |

---

## 🛠 기술 스택

* 기술스택 : HTML / CSS / JavaScript
* 버전 관리 : Git
* 협업 : GitHub

---

## 🌳 브랜치 전략

본 프로젝트는 다음과 같은 브랜치 전략을 사용합니다.

* `main`: 최종 배포 가능한 안정 버전
* `develop`: 기능 통합 브랜치
* `feature/*`: 각 기능 개발 브랜치

예시:

* feature/game-logic
* feature/ui
* feature/word-data

---

## 🔄 협업 워크플로우

1. Issue 생성 (작업 내용 정의)
2. feature 브랜치 생성
3. 기능 개발 및 commit
4. Pull Request 생성
5. 코드 리뷰 진행
6. develop 브랜치에 merge
7. 최종적으로 main 브랜치에 반영

---

## ✅ 커밋 컨벤션

다음과 같은 커밋 메시지 규칙을 따릅니다.

* `feat`: 새로운 기능 추가
* `fix`: 버그 수정
* `refactor`: 코드 개선
* `docs`: 문서 수정
* `style`: 코드 스타일 변경 (로직 변화 없음)

예시:

* feat: add word validation logic
* fix: keyboard input error

---

## 🎯 주요 기능

* 5글자 단어 입력 기능
* 정답 비교 및 결과 표시
* 색상 피드백 (정답 / 위치 틀림 / 없음)
* 최대 6회 시도 제한

---

## ⚠️ 협업 규칙

* main 브랜치 직접 수정 금지
* 모든 작업은 Pull Request를 통해 병합
* 최소 1명 이상의 코드 리뷰 후 merge
* 의미 있는 단위로 commit 작성

---

## 🧪 테스트 및 실행 방법

1. 저장소 클론

```bash
git clone <repository-url>
```

2. 프로젝트 실행

```bash
index.html 파일을 브라우저에서 실행
```

---

## 📂 디렉토리 구조 (예시)

```
OSS-Project-Wordle/
│── index.html        ← 현수 주담당, 재현,승열 보조 및 요청
│── style.css         ← 현수 담당 , 재현 필요사항 요청 isues 통해서
│── main.js           ← 공통 충동 가능성 높음 주의
│── README.md         ← 공통 기존 내용 건들이지 말고 추가만
│── .gitignore        ← 공통 
│
├── js/
│   ├── game.js       ← 재현 담당
│   ├── ui.js         ← 현수 담당
│   └── words.js      ← 승열 담당
│
├── assets/
│   └── (이미지 등)

---

## 🚀 향후 개선 사항

* 반응형 UI 개선
* 애니메이션 효과 추가
* 단어 API 연동
* 점수 저장 기능

---

## 📖 프로젝트 목표

* Git 브랜치 전략 이해 및 적용
* Pull Request 기반 협업 경험
* Merge Conflict 해결 능력 향상
* 협업 과정 문서화 경험

---
