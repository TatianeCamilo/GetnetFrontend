import HomePage from "../pages/HomePage";
import FunctionsHome from "../pages/FunctionsHome";
import FunctionsDoubt from "../pages/FunctionsDoubt";  

describe('Central de Ajuda', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Deve visitar a página inicial, fechar o modal, clicar em Ajuda, acessar a Central de Ajuda, preencher o texto e validar o modal', () => {
        // Visitar a página inicial
        HomePage.visit();
        
        // Fechar o modal se estiver presente
        FunctionsHome.closeModalIfPresent();
        
        // Clicar no botão Ajuda
        FunctionsHome.clickMenuButton();
        
        // Clicar no botão Central de Ajuda e preencher o texto
        FunctionsDoubt.clickSubMenu();
        FunctionsDoubt.typeIntoInput();
        FunctionsDoubt.clickProvidedElement();
        
        // Validar o texto do modal e fechar
        FunctionsDoubt.validateModalText();
        FunctionsDoubt.closeModal();
    });
});
