# GitHub User Search

Este projeto é uma aplicação web desenvolvida como parte da "Quest" de JavaScript do módulo de Front-End do curso DevQuest Full-Stack. A aplicação permite que os usuários pesquisem por um perfil do GitHub e visualizem informações detalhadas sobre o usuário, seus repositórios e suas atividades recentes.

![Demo da página](./src/assets/Captura%20de%20tela%202025-08-29%20220600.png)

## 🚀 Sobre o Projeto

O objetivo principal deste projeto é consumir a API do GitHub para buscar e exibir dados de usuários de forma clara e organizada. A interface é dividida em três seções principais para uma melhor experiência do usuário: perfil do usuário, lista de repositórios e eventos recentes.

## ✨ Funcionalidades

O projeto conta com as seguintes funcionalidades:

-   **Busca de Usuário:** Permite que o usuário insira o nome de um usuário do GitHub para buscar suas informações.
-   **Exibição de Perfil:**
    -   Nome de usuário
    -   Foto de perfil
    -   Biografia
    -   Número de seguidores
    -   Número de pessoas que o usuário segue
-   **Listagem de Repositórios:**
    -   Exibe os 10 repositórios mais recentes do usuário.
    -   Para cada repositório, são exibidas as seguintes informações:
        -   Nome do repositório
        -   Quantidade de forks
        -   Quantidade de estrelas
        -   Quantidade de watchers
        -   Linguagem de programação predominante
-   **Eventos Recentes:**
    -   Lista os 10 eventos mais recentes do usuário.
    -   Filtra e exibe apenas os eventos do tipo `CreateEvent` (criação de repositórios) e `PushEvent` (commits).
    -   Para cada evento, exibe o nome do repositório e a mensagem do commit (se aplicável).

## 🛠️ Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas no desenvolvimento deste projeto:

-   **HTML5:** Para a estruturação da página.
-   **CSS3:** Para a estilização e design da aplicação.
-   **JavaScript:** Para a lógica da aplicação e manipulação do DOM.
-   **API do GitHub:** Para a busca e obtenção dos dados dos usuários.

## ⚙️ Acesso e Utilização

Você pode acessar e utilizar o projeto de duas maneiras:

### Acesso Online (GitHub Pages)

O projeto está disponível para visualização e uso imediato através do GitHub Pages.

**[Clique aqui para acessar o projeto](https://adryel7.github.io/fetch-api-github/)**

### Executando Localmente

Se preferir, você pode clonar o repositório e executá-lo em sua máquina local:

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/Adryel7/fetch-api-github](https://github.com/Adryel7/fetch-api-github)
    ```
2.  Abra o arquivo `index.html` em seu navegador de preferência.
3.  No campo de busca, digite o nome de um usuário do GitHub e clique em "Buscar".
4.  As informações do usuário serão carregadas e exibidas na tela.

## 🙏 Agradecimentos

Este projeto foi desenvolvido como um desafio prático proposto no curso **DevQuest Full-Stack**. Agradeço aos instrutores e à comunidade pelo apoio e pelo conhecimento compartilhado.