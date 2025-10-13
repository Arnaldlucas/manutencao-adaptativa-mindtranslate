# Arquitetura do MindTranslate

O sistema segue uma arquitetura de Single-Page Application (SPA) com um backend "serverless" (BaaS).

* **Frontend:** Construído com **React** e **Vite**, hospedado na **Vercel**. A interface é reativa e utiliza **Tailwind CSS** para estilização e **React Router** para navegação. O estado global de autenticação é gerenciado pela **Context API**.

* **Backend (BaaS):** A plataforma **Firebase** é utilizada para todos os serviços de backend:
    * **Firebase Authentication:** Gerencia o registro, login e sessões de usuário.
    * **Firestore Database:** Banco de dados NoSQL que armazena os dados da aplicação, como perfis de usuário (`users`), o glossário (`terms`) e o conteúdo dos quizzes (`quizzes`).

## Diagrama Simplificado

A criar...
