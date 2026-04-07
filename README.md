### 📊 시스템 유스케이스 다이어그램

```mermaid
flowchart TD
    User((사용자))
    
    subgraph "스마트 혜택 가계부 시스템"
        UC1[지출/수입 내역 관리 CRUD]
        UC2[카드 혜택 자동 계산]
        UC3[최적 카드 비교 시뮬레이션]
        UC4[소비 페르소나 분석]
        UC5[지출 속도 알림]
        UC6[CSV 데이터 백업]
    end

    User --> UC1
    User --> UC3
    User --> UC4
    User --> UC5
    User --> UC6
    
    UC1 -.->|include| UC2
