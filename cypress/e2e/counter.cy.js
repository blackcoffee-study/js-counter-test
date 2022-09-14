// - [ ] counter의 초기값은 0이다.
// - [ ] + 버튼을 클릭 시 count가 1증가한다.
// - [ ] - 버튼을 클릭 시 count가 1감소한다.
// - [ ] + 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)
// - [ ] - 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)
// - [ ] reset 버튼을 클릭 시 counter가 0으로 초기화된다.

describe('카운터 앱 테스트. 카운팅 스탈~ 밤하늘의 퍼얼~ 파하악~씨', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html');
    });

    it('couter의 초기값은 0이다', () => {
        cy.get('#value').invoke('text').should('eq', '0');
    });

    it('+ 버튼을 클릭 시 count가 1증가한다.', () => {
        // 먼저 기존 값을 가져오고,
        // + 버튼을 클릭한 다음에,
        // 변화된 값이 기존값 + 1 인지 체크
        cy.get('#value')
            .invoke('text')
            .then((value) => {
                const preValue = Number(value);
                cy.get('.increase-btn').click();
                cy.get('#value')
                    .invoke('text')
                    .should('eq', String(preValue + 1));
            });
    });

    it('- 버튼을 클릭 시 count가 1감소한다.', () => {
        // + 버튼을 클릭해서 값을 1로 만든다.
        // 기존 값인 1을 가져오고,
        // - 버튼을 클릭한 다음에
        // 변화된 값이 0 인지 체크

        cy.get('.increase-btn').click();

        cy.get('#value')
            .invoke('text')
            .then((value) => {
                const preValue = Number(value);
                cy.get('.decrease-btn').click();
                cy.get('#value')
                    .invoke('text')
                    .should('eq', String(preValue - 1));
            });
    });

    it('+ 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max rkqtdl 10)', () => {
        for (let i = 0; i <= 13; i++) {
            cy.get('.increase-btn').click();
        }
        cy.get('#value').invoke('text').should('eq', '10');
    });

    it('- 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)', () => {
        cy.get('.decrease-btn').click();
        cy.get('#value').invoke('text').should('eq', '0');
    });

    it('reset 버튼을 클릭 시 counter가 0으로 초기화된다.', () => {
        cy.get('.increase-btn').click();
        cy.get('.reset-btn').click();
        cy.get('#value').invoke('text').should('eq', '0');
    });
});
