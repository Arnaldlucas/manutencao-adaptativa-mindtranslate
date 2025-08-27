#  MindTranslate

<p align="center">
  Uma plataforma web interativa projetada para ajudar estudantes e desenvolvedores a dominar o vocabulário técnico do mundo da programação de forma visual, prática e gamificada.
</p>

<p align="center">
  <strong><a href="https://mindtranslate-git-main-arnald-lucas-projects.vercel.app">Acessar a Demo Ao Vivo</a></strong>
</p>


##  Funcionalidades

- **✅ Autenticação de Usuários:** Sistema completo de registro e login utilizando Firebase Authentication.
- **✅ Rotas Protegidas:** Acesso a páginas internas somente para usuários autenticados.
- **✅ Glossário de Termos Dinâmico:** Lista de termos e suas traduções/descrições, buscados em tempo real do Firestore.
- **✅ Busca Inteligente:** Funcionalidade de pesquisa instantânea para filtrar termos no glossário.
- **✅ Quiz Interativo:** Um quiz dinâmico que busca perguntas do Firestore e fornece feedback em tempo real.
- **✅ Persistência de Progresso:** Os resultados dos quizzes são salvos no perfil do usuário no Firestore.
- **✅ Perfil de Usuário:** Página de perfil que exibe dados combinados do Firebase Auth e do Firestore.
- **⬜ Acompanhamento de Progresso:** (Próxima feature) Uma dashboard para visualizar o histórico de quizzes e estatísticas de aprendizado.
- **⬜ Gamificação:** (Próxima feature) Sistema de pontos, níveis e conquistas para engajar o usuário.


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
