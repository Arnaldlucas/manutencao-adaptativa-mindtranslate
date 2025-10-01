# Trabalho Prático 2: Manutenção Adaptativa - Projeto MindTranslate

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Disciplina](https://img.shields.io/badge/Disciplina-Manutenção%20e%20Integração%20de%20Software-blue)
![Universidade](https://img.shields.io/badge/Universidade-UFAM%20ICET-lightgrey)

---
##MINDTRANSLATE

<img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/e032db69-ed3c-44bb-9a59-71fd9bde32d5" />


## 1. Contexto do Trabalho

Este repositório documenta a aplicação prática dos conceitos de **Manutenção Adaptativa de Software** no projeto "MindTranslate", conforme os requisitos do TP2 da disciplina de Manutenção e Integração de Software (Semestre 2025-2).

O objetivo é demonstrar a capacidade de adaptar um sistema de software a mudanças em seu ambiente, incluindo a migração de APIs, a conformidade com novas regulamentações e a atualização de dependências críticas. O código-fonte completo da aplicação adaptada está localizado no diretório `/src`.

## 2. Sobre o Sistema "MindTranslate"

O MindTranslate é um ecossistema de aprendizado online, desenvolvido como uma Single-Page Application (SPA) interativa com React e Firebase, com o propósito de solucionar um dos maiores desafios para novos desenvolvedores: a barreira do vocabulário técnico. A plataforma ataca diretamente a dificuldade de reter jargões e conceitos complexos, oferecendo uma ferramenta de capacitação que acelera a fluência técnica de estudantes e profissionais em início de carreira, tornando-os mais confiantes e eficazes em seus estudos e no ambiente de trabalho.

O funcionamento da plataforma se baseia em um ciclo de aprendizado ativo e contínuo. Primeiramente, o usuário utiliza o glossário dinâmico para pesquisar e aprender termos técnicos, que são apresentados com definições claras e exemplos práticos. Em seguida, ele valida e solidifica seu conhecimento através de quizzes interativos gerados a partir do conteúdo estudado. Por fim, um painel de acompanhamento de progresso permite ao usuário visualizar suas estatísticas de desempenho, mantendo-o motivado e ciente de sua evolução ao longo da jornada de aprendizado.

## 3. Plano de Estratégia Adaptativa

As três estratégias de manutenção adaptativa foram planejadas e documentadas no arquivo `plano-estrategia.md`, que serviu como guia para a execução deste trabalho. As estratégias abordadas foram:

* **Adaptação a Novo Ambiente de Plataforma (PWA):** Esta manutenção adapta o sistema para um novo ambiente de plataforma, transformando-o em um Progressive Web App (PWA) para atender às expectativas de uso modernas.
* **Adaptação a Regulamentação (LGPD):** Inclusão de um campo de consentimento de Termos de Uso no formulário de registro.

## 4. Evidências e Documentação

Todo o processo de manutenção foi documentado seguindo as melhores práticas, com evidências de "antes e depois" para cada adaptação.

| Estratégia Adaptativa | Documento de Evidência | Status |
| :--- | :--- | :--- |
| **1. Adaptação a Regulamentação (LGPD)** | [`evidencia1.md`](./evidencia1.md) | ✅ Concluído |
| **2. Adaptação a Novo Ambiente de Plataforma (PWA)** | [`evidencia2.md`](./evidencia2.md) | ✅ Concluído |

O histórico detalhado de todas as mudanças de código realizadas durante este trabalho pode ser consultado no arquivo [`CHANGELOG.md`](./CHANGELOG.md). O relatório final, com uma síntese e reflexão crítica sobre o processo, está disponível em [`RELATORIO.md`](./RELATORIO.md).

## 5. Estrutura do Repositório

* **/codigoFonte**: Contém o código-fonte completo da aplicação React "MindTranslate" após as adaptações.
* **plano-estrategia.md**: Documento que descreveu o plano para as 3 estratégias de manutenção.
* **evidencia[1-3].md**: Relatórios detalhados para cada uma das estratégias implementadas.
* **CHANGELOG.md**: Um registro cronológico de todas as mudanças significativas no código.
* **RELATORIO.md**: O relatório final consolidado do trabalho.

## 6. Equipe

* Arnald Bentes Lucas

