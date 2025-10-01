# Trabalho Prático 2: Manutenção Adaptativa - Projeto MindTranslate

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Disciplina](https://img.shields.io/badge/Disciplina-Manutenção%20e%20Integração%20de%20Software-blue)
![Universidade](https://img.shields.io/badge/Universidade-UFAM%20ICET-lightgrey)

---

## 1. Contexto do Trabalho

Este repositório documenta a aplicação prática dos conceitos de **Manutenção Adaptativa de Software** no projeto "MindTranslate", conforme os requisitos do TP2 da disciplina de Manutenção e Integração de Software (Semestre 2025-2).

O objetivo é demonstrar a capacidade de adaptar um sistema de software a mudanças em seu ambiente, incluindo a migração de APIs, a conformidade com novas regulamentações e a atualização de dependências críticas. O código-fonte completo da aplicação adaptada está localizado no diretório `/src`.

## 2. Sobre o Sistema "MindTranslate"

O MindTranslate é uma plataforma web interativa (SPA) construída com React e Firebase. Seu propósito é auxiliar estudantes e desenvolvedores a dominar o vocabulário técnico da área de programação através de um glossário dinâmico, quizzes interativos e acompanhamento de progresso.

## 3. Plano de Estratégia Adaptativa

As três estratégias de manutenção adaptativa foram planejadas e documentadas no arquivo `plano-estrategia.md`, que serviu como guia para a execução deste trabalho. As estratégias abordadas foram:

* **Migração de API Externa:** Substituição de uma API de autenticação simulada pelo SDK oficial do Firebase.
* **Adaptação a Regulamentação (LGPD):** Inclusão de um campo de consentimento de Termos de Uso no formulário de registro.
* **Atualização de Dependência:** Atualização do SDK do Firebase para a versão mais recente.

## 4. Evidências e Documentação

Todo o processo de manutenção foi documentado seguindo as melhores práticas, com evidências de "antes e depois" para cada adaptação.

| Estratégia Adaptativa | Documento de Evidência | Status |
| :--- | :--- | :--- |
| **1. Migração de API Externa** | [`evidencia1.md`](./evidencia1.md) | ✅ Concluído |
| **2. Adaptação a Regulamentação (LGPD)** | [`evidencia2.md`](./evidencia2.md) | ✅ Concluído |
| **3. Mudança de Dependência** | [`evidencia3.md`](./evidencia3.md) | ✅ Concluído |

O histórico detalhado de todas as mudanças de código realizadas durante este trabalho pode ser consultado no arquivo [`CHANGELOG.md`](./CHANGELOG.md). O relatório final, com uma síntese e reflexão crítica sobre o processo, está disponível em [`RELATORIO.md`](./RELATORIO.md).

## 5. Estrutura do Repositório

* **/src**: Contém o código-fonte completo da aplicação React "MindTranslate" após as adaptações.
* **/evidencias/prints**: Armazena os screenshots que servem como evidência visual (antes/depois).
* **plano-estrategia.md**: Documento que descreveu o plano para as 3 estratégias de manutenção.
* **evidencia[1-3].md**: Relatórios detalhados para cada uma das estratégias implementadas.
* **CHANGELOG.md**: Um registro cronológico de todas as mudanças significativas no código.
* **RELATORIO.md**: O relatório final consolidado do trabalho.

## 6. Equipe

* [Nome do Membro 1]
* [Nome do Membro 2]
* [Nome do Membro 3]
* [Nome do Membro 4]
