# Relatório Final - Manutenção Adaptativa (TP2)

**Disciplina:** Manutenção e Integração de Software
**Semestre:** 2025-2
**Equipe:** Arnald

---

## 1. Introdução

Este relatório sintetiza o trabalho prático de **Manutenção Adaptativa** realizado no projeto MindTranslate. O objetivo foi aplicar duas estratégias distintas de adaptação para responder a mudanças no ambiente do software, conforme o plano de ação definido em `plano-estrategia.md`.

## 2. Síntese das Adaptações Realizadas

A seguir estão detalhadas as estratégias de manutenção que foram implementadas, com links para suas respectivas evidências.

---

### ✅ Estratégia 1: Adaptação a Cenário de Regulamentação (LGPD)

* **Problema Adaptativo:** O formulário de registro não solicitava o consentimento explícito do usuário aos Termos de Uso, o que não está em conformidade com regulamentações de proteção de dados como a LGPD.
* **Adaptação Implementada:** Foi adicionado um `checkbox` de consentimento obrigatório na tela de registro. A lógica do formulário foi alterada para que o botão "Cadastrar" só seja habilitado após o usuário marcar o campo, garantindo a conformidade.
* **Documento de Evidência:** **[`evidencia1.md`](./evidencia1.md)**

---

### ✅ Estratégia 2: Adaptação a Novo Ambiente de Plataforma (PWA)

* **Problema Adaptativo:** A aplicação operava exclusivamente como um site em uma aba de navegador, limitando a experiência do usuário por não ser instalável e não possuir capacidades offline.
* **Adaptação Implementada:** O sistema foi transformado em um Progressive Web App (PWA). Através da configuração de um Web App Manifest e um Service Worker, a aplicação agora pode ser instalada em dispositivos desktop e móveis, proporcionando uma experiência de uso mais integrada e resiliente.
* **Documento de Evidência:** **[`evidencia2.md`](./evidencia2.md)**

---

## 3. Conclusão final

A realização deste trabalho prático de manutenção adaptativa no projeto MindTranslate permitiu consolidar a importância de desenvolver sistemas com foco na evolutibilidade. A implementação do consentimento de Termos de Uso (LGPD) e a transformação da aplicação em um Progressive Web App (PWA) foram exemplos concretos de como um software precisa se ajustar a fatores externos, sejam eles regulatórios ou tecnológicos. Conclui-se que o sucesso dessas adaptações está diretamente ligado não apenas à implementação do código, mas também à utilização de uma arquitetura modular e de um processo de desenvolvimento estruturado, com versionamento e documentação, que garantem a integridade do sistema durante seu ciclo de vida.
