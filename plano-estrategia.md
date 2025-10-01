# Plano de Estratégia Adaptativa - Projeto MindTranslate

## 1. Introdução

Este documento descreve o plano estratégico para a aplicação de Manutenção Adaptativa no sistema MindTranslate, conforme os requisitos do TP2 da disciplina de Manutenção e Integração de Software. O objetivo é garantir que a aplicação continue funcional, segura e relevante em resposta a mudanças em seu ambiente tecnológico e regulatório.

## 2. Contexto do Sistema

O MindTranslate é uma Single-Page Application (SPA) construída com React e Vite, utilizando Firebase como plataforma de Backend-as-a-Service (BaaS) para autenticação e banco de dados (Firestore). O deploy contínuo é realizado através da Vercel.

## 3. Estratégias Adaptativas a Serem Implementadas

Para cumprir os objetivos do trabalho, executaremos as duas estratégias de manutenção adaptativa a seguir.

### Estratégia 1: Adaptação a Cenário de Regulamentação (LGPD)

* **Problema Adaptativo Enfrentado:** O formulário de registro do sistema coleta dados do usuário (nome, e-mail) sem solicitar o consentimento explícito aos Termos de Uso da plataforma, o que não está em conformidade com regulamentações de proteção de dados como a LGPD.
* **Adaptação Planejada:** Modificar a interface de registro (`Register.jsx`) para incluir uma caixa de seleção (checkbox) obrigatória. O botão "Cadastrar" permanecerá desabilitado até que o usuário marque esta opção, garantindo que o consentimento seja uma ação explícita.
* **Impacto Esperado:** O sistema se adequará às boas práticas e requisitos legais de consentimento do usuário, aumentando a transparência e a conformidade regulatória do produto.

### Estratégia 2: Adaptação a Novo Ambiente de Plataforma (PWA)

* **Problema Adaptativo Enfrentado:** A aplicação funciona apenas como um site tradicional, restrito a uma aba de navegador e dependente de conexão com a internet. Isso limita a experiência do usuário, que não pode "instalar" a aplicação para acesso rápido ou utilizá-la em cenários offline.
* **Adaptação Planejada:** Implementar a funcionalidade de Progressive Web App (PWA). Isso será feito através da adição de um Web App Manifest (para definir a identidade da aplicação) и de um Service Worker (para gerenciar o cache e permitir o funcionamento offline), tornando a aplicação instalável em desktops e dispositivos móveis.
* **Impacto Esperado:** Melhorar significativamente a experiência e o engajamento do usuário, oferecendo acesso rápido por meio de um ícone na tela do dispositivo e garantindo resiliência e usabilidade mesmo em condições de rede instáveis.

### Estratégia 3: Atualização do React para 19.1.0
* **Problema Adaptativo Enfrentado:** O projeto utilizava versões desatualizadas e inconsistentes do React (react e react-dom na 19.0.0). Essa defasagem comprometia a compatibilidade com bibliotecas externas, limitava o acesso a novos recursos e aumentava riscos de falhas de segurança.

* **Adaptação Planejada:** Realizar a atualização das dependências principais para a versão estável mais recente:
react → ^19.1.0
react-dom → ^19.1.0
Atualizar também os pacotes de tipagem (@types/react e @types/react-dom).
Rodar instalação e validar a execução da aplicação após a mudança.

* **Impacto Esperado:**
Garantir compatibilidade com as bibliotecas e ferramentas mais atuais do ecossistema React.
Aumentar a estabilidade e segurança do sistema.
Disponibilizar novas funcionalidades e otimizações da versão 19.1.0.
Manter a aplicação em conformidade com boas práticas de manutenção adaptativa.
