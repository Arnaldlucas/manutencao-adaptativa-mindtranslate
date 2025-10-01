# Plano de Estratégia Adaptativa - Projeto MindTranslate

## 1. Introdução

Este documento descreve o plano estratégico para a aplicação de Manutenção Adaptativa no sistema MindTranslate, conforme os requisitos do TP2 da disciplina de Manutenção e Integração de Software. O objetivo é garantir que a aplicação continue funcional, segura e relevante em resposta a mudanças em seu ambiente tecnológico, de dependências e regulatório.

## 2. Contexto do Sistema

O MindTranslate é uma Single-Page Application (SPA) construída com React e Vite, utilizando Firebase como plataforma de Backend-as-a-Service (BaaS) para autenticação e banco de dados (Firestore). O deploy contínuo é realizado através da Vercel.

## 3. Estratégias Adaptativas a Serem Implementadas

[cite_start]Para cumprir os objetivos do trabalho, executaremos as três estratégias de manutenção adaptativa a seguir, conforme o enunciado[cite: 777].

### Estratégia 1: Migração de API Externa

* **Problema Adaptativo Enfrentado:** A versão inicial do sistema foi desenvolvida com a lógica de autenticação acoplada a uma API simulada em `localhost:5000`, como evidenciado por erros de conexão (`net::ERR_CONNECTION_REFUSED`) durante os testes iniciais. [cite_start]Esta abordagem não era funcional em um ambiente de produção[cite: 796, 797].

* **Adaptação Planejada:** Realizar a migração completa da lógica de autenticação no `AuthContext`. As chamadas `axios` para o endpoint local serão substituídas pelas chamadas diretas ao SDK do **Firebase Authentication**. Esta adaptação representa a migração de uma API de teste para a API externa real e oficial do serviço.

* **Impacto Esperado:** A aplicação se tornará funcional e segura em ambiente de produção, alinhando-se com a arquitetura BaaS planejada e permitindo o registro e login de usuários de forma robusta.

### Estratégia 2: Adaptação a Cenário de Regulamentação (LGPD)

* [cite_start]**Problema Adaptativo Enfrentado:** O formulário de registro do sistema coleta dados do usuário (nome, e-mail) sem solicitar o consentimento explícito aos Termos de Uso da plataforma, o que não está em conformidade com regulamentações de proteção de dados como a LGPD[cite: 785, 790].

* **Adaptação Planejada:** Modificar a interface de registro (`Register.jsx`) para incluir uma caixa de seleção (checkbox) obrigatória. O botão "Cadastrar" permanecerá desabilitado até que o usuário marque esta opção, garantindo que o consentimento seja uma ação explícita.

* **Impacto Esperado:** O sistema se adequará às boas práticas e requisitos legais de consentimento do usuário, aumentando a transparência e a conformidade regulatória do produto.

### Estratégia 3: Simulação de Mudança de Dependência

* **Problema Adaptativo Enfrentado:** As dependências do projeto, em especial o SDK do `firebase`, evoluem constantemente. [cite_start]Manter uma versão desatualizada pode expor o sistema a vulnerabilidades de segurança e impedir o uso de novas funcionalidades e otimizações de performance[cite: 779, 781].

* **Adaptação Planejada:** Realizar a atualização da biblioteca `firebase` para a versão estável mais recente disponível no `npm`. Após a atualização, a aplicação será testada integralmente para identificar e corrigir quaisquer incompatibilidades (*breaking changes*) que possam surgir devido a mudanças na API do SDK, garantindo que todas as funcionalidades (autenticação, busca no Firestore, etc.) continuem operando como esperado.

* **Impacto Esperado:** Garantir que o projeto se mantenha seguro, performático e compatível com o ecossistema tecnológico atual, adaptando-se à evolução natural de suas dependências.
