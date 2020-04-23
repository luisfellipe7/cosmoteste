# CosmoBots Challenge

## Proposta

Implementar uma aplicação client-side, que consulte a API do GitHub e mostre os repositórios de um determinado usuário. Esta aplicação deve funcionar nos navegadores mais recentes do mercado.

### API

https://developer.github.com/v3/

### Endpoints

Detalhes de um usuário: https://api.github.com/users/{username}

Repositórios de um usuário: https://api.github.com/users/{username}/repos

### Navegação

- Deve existir uma página com campo de pesquisa por @ de um usuário do GitHub.
- Ao buscar um usuário pelo login do github, direcionar para pagina de resultado de busca.
- Se o usuário for encontrado apresentar uma pagina de detalhes do usuário, com seus repositórios e informações; caso contrario exibir mensagem amigável de erro.

### Requisitos

- Eu, como usuário, desejo buscar por um usuário do GitHub;
- Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
- Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;
 
### Definição de pronto

- Não é obrigatório o uso de um framework ou lib, mas recomendamos React, Angular ou Vue.
- É obrigatório o uso de rotas.

### Submissão
O desafio deve ser entregue pelo GitHub. A aplicação deve estar hospedada (GitHub Pages, Now, Netlify, Firebase, etc) As URLs devem ser enviadas por email.

### Prazo
O prazo de entrega é de uma semana

### Critérios de Avaliação
O desafio será avaliado através de cinco critérios.

#### Entrega

* O código possui algum controle de dependências?
* O resultado final está completo para ser executado?
* O resultado final atende ao que se propõe fazer?
* O resultado final atende totalmente aos requisitos propostos?
* O resultado final é visualmente elegante?

#### Boas Práticas

* O código está de acordo com o guia de estilo da linguagem?
* O código está bem estruturado?
* O código está fluente na linguagem?
* O código faz o uso correto de _Design Patterns_?

#### Documentação

* O código foi entregue com um arquivo de README claro de como se guiar?
* O código possui comentários pertinentes?
* O código está em algum controle de versão?
* Os commits são pequenos e consistentes?
* As mensagens de commit são claras?

#### Código Limpo

* O código possibilita expansão para novas funcionalidades?
* O código é _Don't Repeat Yourself_?
* O código é fácil de compreender?

#### Controle de Qualidade

* O código possui configuração de lint?
* O código possui testes unitários?
* O código possui teste de cobertura?
* O código está em Integração Contínua?

## Tech/framework usado

<b>Construido com:</b>
- [React](https://reactjs.org)

## Features
User search
User details, like Name, email,bio,followers,following and avatar image
User repositories sorted by the highest number of stars

### Search
You can search for the name or handle of the user and it will show 30 results max showing the handles, if the person your searching it's not there please refine your search.

### User Info
The user info that is shown is Name, picture, email, bio, number of followers and numbers of following

### Repositories
The repositories shown is sorted by the highest number of stars to the lowest and has the name of the repositories, how many stars, how many forks and the description.

## Installation
Clone the project

Travel to the project folder

run this commands:
 - yarn install
 - yarn start
 
Para uma versão live dessa demo acessar:
 - https://luisfellipecosmochallenge.netlify.app/

## Testes
Testes foram realizados utilizando
- [Jest] (https://jestjs.io/)
- [React Testing Library] (https://testing-library.com/docs/react-testing-library/intro)

Testando a API e sua resposta e os componentes utilizados na construção da aplicação

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
