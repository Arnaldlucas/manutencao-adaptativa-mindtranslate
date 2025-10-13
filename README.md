# Trabalhos de Manutenção e Integração do Sistema "MindTranslate"

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Disciplina](https://img.shields.io/badge/Disciplina-Manutenção%20e%20Integração%20de%20Software-blue)
![Universidade](https://img.shields.io/badge/Universidade-UFAM%20ICET-lightgrey)

Este repositório documenta os trabalhos de **manutenções** aplicadas ao sistema "MindTranslate", como parte da disciplina de Manutenção e Integração de Software do Instituto de Ciências Exatas e Tecnologia (ICET) da Universidade Federal do Amazonas (UFAM).

---

## 🚀 Sobre o Sistema "MindTranslate"

O MindTranslate é um ecossistema de aprendizado online, desenvolvido como uma Single-Page Application (SPA) interativa com React e Firebase, com o propósito de solucionar um dos maiores desafios para novos desenvolvedores: a barreira do vocabulário técnico. A plataforma ataca diretamente a dificuldade de reter jargões e conceitos complexos, oferecendo uma ferramenta de capacitação que acelera a fluência técnica de estudantes e profissionais em início de carreira, tornando-os mais confiantes e eficazes em seus estudos e no ambiente de trabalho.
<p align="center">
  <strong><a href="https://mindtranslate-git-main-arnald-lucas-projects.vercel.app">Acessar a Demo Ao Vivo</a></strong>
</p>

## ✨ Principais Funcionalidades

O funcionamento da plataforma se baseia em um ciclo de aprendizado ativo e contínuo:

1.  **📖 Glossário Dinâmico:** Permite ao usuário pesquisar e aprender jargões e termos técnicos, apresentados com definições claras e exemplos práticos.
2.  **🧠 Quizzes Interativos:** Valida e solidifica o conhecimento através de questionários gerados a partir do conteúdo estudado no glossário.
3.  **📊 Painel de Progresso:** Oferece um dashboard para o usuário visualizar suas estatísticas de desempenho, acompanhando sua evolução e mantendo a motivação.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido como uma Single-Page Application (SPA) utilizando:

* **React:** Para a construção da interface de usuário interativa.
* **Firebase:** Como backend para autenticação, banco de dados e hosting.
* **HTML5 & CSS3:** Para a estrutura e estilização da aplicação.

##  Como Rodar o Projeto Localmente

Para executar o MindTranslate no seu ambiente de desenvolvimento, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Arnaldlucas/Mindtranslate.git
    cd SEU_REPOSITORIO
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    - Crie um arquivo chamado `.env.local` na raiz do projeto.
    - Copie o conteúdo do exemplo abaixo e substitua pelos seus próprios dados do Firebase.

    **.env.local**
    ```
    VITE_FIREBASE_API_KEY="SUA_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="SEU_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="SEU_PROJECT_ID"
    VITE_FIREBASE_STORAGE_BUCKET="SEU_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGING_SENDER_ID="SEU_MESSAGING_SENDER_ID"
    VITE_FIREBASE_APP_ID="SEU_APP_ID"
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.


## 📂 Estrutura do Repositório

Este repositório está organizado da seguinte forma:

* `📁 CodigoFonte/`: Contém o código-fonte completo e funcional da aplicação MindTranslate, que serviu de base para os trabalhos de manutenção.
* `📁 Manutenção-Corretiva/`: Documenta todo o processo de manutenção corretiva, incluindo relatórios de bugs, análises de causa raiz e as soluções aplicadas no código.
* `📁 Manutenção-Adaptativa/`: Contém os relatórios e documentação referentes à manutenção adaptativa, detalhando as novas funcionalidades, melhorias e adaptações implementadas no sistema.

## 👨‍💻 Autores

* [Arnaldlucas](https://github.com/Arnaldlucas)
* _(Adicione aqui o nome e link de outros integrantes, se houver)_

---
