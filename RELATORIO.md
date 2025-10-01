# Relatório Final - Manutenção Adaptativa (TP2)

**Disciplina:** Manutenção e Integração de Software
**Semestre:** 2025-2
**Equipe:** [Liste os nomes dos membros da sua equipe aqui]

---

## 1. Introdução

Este relatório sintetiza o trabalho prático de **Manutenção Adaptativa** realizado no projeto MindTranslate. O objetivo foi aplicar três estratégias distintas de adaptação para responder a mudanças no ambiente do software, conforme o plano de ação definido em `plano-estrategia.md`.

## 2. Síntese das Adaptações Realizadas

A seguir estão detalhadas as estratégias de manutenção que foram implementadas, com links para suas respectivas evidências.

---

### ✅ Estratégia 1: Adaptação a Cenário de Regulamentação (LGPD)

* **Problema Adaptativo:** O formulário de registro não solicitava o consentimento explícito do usuário aos Termos de Uso, o que não está em conformidade com regulamentações de proteção de dados como a LGPD.
* **Adaptação Implementada:** Foi adicionado um `checkbox` de consentimento obrigatório na tela de registro. A lógica do formulário foi alterada para que o botão "Cadastrar" só seja habilitado após o usuário marcar o campo, garantindo a conformidade.
* **Documento de Evidência:** **[`evidencia1.md`](./evidencia1.md)**

---

### ⬜ Estratégia 2: Migração de API Externa

* **Problema Adaptativo:** _(A ser preenchido com a descrição do problema)_
* **Adaptação Implementada:** _(A ser preenchido com a descrição da solução)_
* **Documento de Evidência:** **[`evidencia2.md`](./evidencia2.md)**

---

### ⬜ Estratégia 3: Simulação de Mudança de Dependência

* **Problema Adaptativo:** _(A ser preenchido com a descrição do problema)_
* **Adaptação Implementada:** _(A ser preenchido com a descrição da solução)_
* **Documento de Evidência:** **[`evidencia3.md`](./evidencia3.md)**

## 3. Reflexão Crítica

_(Esta seção pode ser preenchida ao final de todas as tarefas)_

A execução das tarefas de manutenção adaptativa demonstrou na prática a importância de construir um software flexível e desacoplado. A adaptação à LGPD, por exemplo, foi facilitada pela componentização do React. A atualização de dependências e a migração de APIs são processos contínuos na vida de um software, e ter um fluxo de trabalho bem definido com versionamento (Git) e testes (manuais, neste caso) é crucial para realizar essas mudanças com segurança e sem introduzir regressões.
