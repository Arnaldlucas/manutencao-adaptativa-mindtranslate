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
