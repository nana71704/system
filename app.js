// 1. 초기 카드 레지스트리 (금융 지능 엔진의 기반 데이터)
const cardRegistry = [
    {
        id: "card_01",
        name: "우리-카드의정석",
        targetAmount: 300000, // 전월 실적 기준
        benefits: [
            { category: "편의점", type: "percent", value: 0.1 }, // 10% 할인
            { category: "교통", type: "fixed", value: 1000 }      // 건당 1000원 할인
        ]
    },
    {
        id: "card_02",
        name: "신한-DeepDream",
        targetAmount: 0, 
        benefits: [
            { category: "전체", type: "percent", value: 0.007 }  // 기본 0.7% 적립
        ]
    }
];

// 2. 앱 상태 관리 (State)
let transactions = JSON.parse(localStorage.getItem('myTransactions')) || [];

// 3. 초기화 함수
function init() {
    console.log("앱 초기화 중...");
    renderCardOptions();
    // 데이터가 있다면 초기 렌더링 수행 예정
}

// [헬퍼 함수] 카드 선택 폼에 카드 목록 생성
function renderCardOptions() {
    const cardSelect = document.getElementById('card-select');
    cardSelect.innerHTML = '<option value="">카드 선택</option>';
    
    cardRegistry.forEach(card => {
        const option = document.createElement('option');
        option.value = card.name;
        option.textContent = card.name;
        cardSelect.appendChild(option);
    });
}

// 앱 실행
document.addEventListener('DOMContentLoaded', init);
