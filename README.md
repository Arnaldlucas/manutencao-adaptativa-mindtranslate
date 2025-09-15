# Manutenção Corretiva: Um Estudo de Caso no Projeto MindTranslate

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Disciplina](https://img.shields.io/badge/Disciplina-Manutenção%20e%20Integração%20de%20Software-blue)
![Universidade](https://img.shields.io/badge/Universidade-UFAM%20ICET-lightgrey)

---

## 1. Contexto do Projeto

Este repositório documenta o processo de **Manutenção Corretiva** aplicado ao sistema "MindTranslate", como parte da avaliação da disciplina de Manutenção e Integração de Software (Semestre 2025-2).

O objetivo deste trabalho é aplicar as etapas de um ciclo de manutenção profissional, incluindo a identificação, classificação, documentação e correção de bugs, seguindo as melhores práticas de versionamento de código e gerenciamento de issues.

O código-fonte completo da aplicação MindTranslate pode ser encontrado no repositório principal:
**[Repositório Principal do MindTranslate](https://github.com/Arnaldlucas/Mindtranslate)**

## 2. Sobre o Sistema "MindTranslate"

O MindTranslate é uma plataforma web interativa, desenvolvida como um sistema de aprendizado, para auxiliar estudantes e desenvolvedores a dominar o vocabulário técnico da área de programação.

As funcionalidades principais incluem um sistema de autenticação de usuários, um glossário de termos dinâmico e pesquisável, um quiz interativo para testar os conhecimentos adquiridos e um painel de progresso pessoal. 

Toda a documentação formal de apresentação do sistema, incluindo arquitetura e instruções de execução, pode ser encontrada na pasta `/docs` deste repositório. 

## 3. Processo de Manutenção Corretiva

Foram identificados, documentados e corrigidos 3 bugs distintos, cada um representando uma categoria de falha diferente, conforme solicitado no plano de trabalho. O ciclo de vida de cada bug, desde o relato até a correção, pode ser rastreado através dos links abaixo.

| Bug ID | Descrição Resumida | [cite_start]Classificação [cite: 140] | [cite_start]Link da Issue (Relato) [cite: 154] | [cite_start]Link do Pull Request (Correção) [cite: 199] |
| :--- | :--- | :--- | :--- | :--- |
| **#1** | Contagem de quizzes no Dashboard não atualiza em tempo real | [cite_start]`Lógica` [cite: 144] | [Issue #1](LINK_PARA_SUA_ISSUE_1) | [PR #1](LINK_PARA_SEU_PR_1) |
| **#2** | Página de perfil quebra se o documento do usuário não existir | [cite_start]`Runtime` [cite: 145] | [Issue #2](LINK_PARA_SUA_ISSUE_2) | [PR #2](LINK_PARA_SEU_PR_2) |
| **#3** | Página de termos busca todos os documentos de uma só vez | [cite_start]`Performance` [cite: 147] | [Issue #3](LINK_PARA_SUA_ISSUE_3) | [PR #3](LINK_PARA_SEU_PR_3) |

## 4. Estrutura do Repositório

* **`/.github/ISSUE_TEMPLATE`**: Contém os templates YAML padronizados para o relato de bugs, garantindo que todas as informações necessárias sejam coletadas. 
* **`/docs`**: Armazena a documentação de apresentação do sistema (Descrição, Arquitetura, Como Executar). 
* **`RELATORIO_FINAL.md`**: Documento final que consolida todo o trabalho, com links para os artefatos gerados (issues, PRs, etc.). 

## 5. Equipe

* Arnald Bentes
* João Victor
* Victor Gabriel
* Nivalo Yenar
* Illgner Anderson
