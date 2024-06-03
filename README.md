# Projeto de Testes com Cypress

Este projeto é um exemplo simples de como usar o framework de teste Cypress para automatizar testes em uma aplicação web.

## Pré-requisitos

- Node.js instalado

## Instalação

1. Clone este repositório:

https://github.com/TatianeCamilo/Getnet---FrontEnd

2. Navegue até o diretório do projeto:
cd nome-do-repositorio

3. Instale as dependências:
npm install

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

npm run cypress:open
Isso abrirá a interface do Cypress, onde você poderá escolher e executar os testes.

## Estrutura do Projeto

- **cypress/e2e/**: Este diretório contém os arquivos de teste Cypress.
- **cypress/support/**: Este diretório contém arquivos de suporte, como comandos personalizados e configurações.
- **cypress/plugins/**: Este diretório contém arquivos de plugins Cypress.
- **cypress.json**: Arquivo de configuração principal do Cypress.

## Descrição dos Testes
Teste de Central de Ajuda
Este teste automatiza a navegação e interação com a Central de Ajuda do site. As etapas incluem:

Visitar a página inicial.
Fechar o modal se estiver presente.
Clicar no botão "Ajuda".
Acessar a "Central de Ajuda".
Preencher o texto de pesquisa.
Validar o texto do modal e fechar.
Exemplo de Código
Arquivo GetnetFront.cy.js
   
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Este formato condensa todas as informações importantes em uma única página, tornando mais fácil para os usuários encontrarem o que precisam.  
