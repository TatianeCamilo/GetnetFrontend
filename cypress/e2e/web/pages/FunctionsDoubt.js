class FunctionsDoubt {
    static clickSubMenu() {
        cy.xpath('//*[@id="menu-header-menu"]/li[3]/ul/li[2]/ul/li[2]/a')
            .click({ force: true })
            .then(() => {
                cy.log("Clique realizado no elemento do menu.");
            });
    }

    static typeIntoInput() {
        cy.get('#faq-search-input')
            .type('boleto')
            .then(() => {
                cy.log("Palavra 'boleto' escrita no campo de entrada.");
            });
    }

    static clickProvidedElement() {
        cy.get('[href="https://site.getnet.com.br/duvidas/solucao-de-dividas/?modal_open=692"] > .c-search-dropdown-link__item > .c-search-dropdown-link__title')
            .click()
            .then(() => {
                cy.log("Clique realizado no elemento fornecido.");
            });
    }

    static validateModalText() {
        cy.get('.is-modal-open > .o-modal__content > .o-modal__title')
            .contains('Eu concluí a negociação, de que forma receberei meu boleto?');
        cy.log("Texto validado no elemento do modal.");
    }

    static closeModal() {
        cy.get('.is-modal-open > .o-modal__content > .o-modal__close')
            .click()
            .then(() => {
                cy.log("Clique realizado no botão de fechar do modal.");
            });
    }
}

export default FunctionsDoubt;
