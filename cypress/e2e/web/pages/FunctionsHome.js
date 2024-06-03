class FunctionsHome {
    static closeModalIfPresent() {
        cy.get('.closebtn.js-gtm-trigger').then(($closeButton) => {
            if ($closeButton.length) {
                cy.wrap($closeButton).click({ force: true });
                cy.log("Modal fechado.");
            } else {
                cy.log("Elemento de fechar não encontrado, pulando para a próxima etapa.");
            }
        });
    }

    static clickMenuButton() {
        cy.xpath('//*[@id="menu-header-menu"]/li[3]/span')
            .click({ force: true })
            .then(() => {
                cy.log("Clique realizado no elemento '//*[@id=\"menu-header-menu\"]/li[3]/span'.");
            });
    }
}

export default FunctionsHome;
