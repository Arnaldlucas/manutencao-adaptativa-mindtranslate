# Relatório Final de Manutenção Corretiva - Projeto MindTranslate

**Disciplina:** Manutenção e Integração de Software
**Semestre:** 2025-2
**Equipe:** Arnald, Nivaldo, Joao Victor, Victor Gabriel, Illgner

---

## 1. Breve Descrição do Sistema

O MindTranslate é uma plataforma web interativa, desenvolvida como um sistema de aprendizado, para auxiliar estudantes e desenvolvedores a dominar o vocabulário técnico da área de programação. As funcionalidades principais incluem um sistema de autenticação de usuários, um glossário de termos dinâmico e pesquisável, um quiz interativo para testar os conhecimentos adquiridos e um painel de progresso pessoal.

Toda a documentação formal de apresentação do sistema pode ser encontrada na pasta `/docs`. 

## 2. Resumo do Ciclo de Manutenção Corretiva

Este relatório detalha o ciclo completo de manutenção corretiva aplicado ao sistema MindTranslate.Foram identificados, classificados, documentados e corrigidos 5 bugs reais, seguindo as boas práticas de gerenciamento de issues, versionamento de código com Git e revisão por pares através de Pull Requests.

A tabela abaixo consolida todos os artefatos gerados durante este processo.

| Bug ID | Descrição Resumida | Classificação | Link da Issue (Relato) |
| :--- | :--- | :--- | :--- | 
| **#5** | Página de Termos busca todos os documentos de uma só vez | `Performance`  | [Issue #3](https://github.com/thevictorgabriel/issue-Mindtranslate/issues/3) |
| **#4** | Mensagem de boas-vindas mostra email em vez do nome | `Lógica`  | [Issue #4](https://github.com/thevictorgabriel/issue-Mindtranslate/issues/4) |
| **#5** | Recarregar a página em rotas internas causa erro 404 | `Lógica` | [Issue #5](https://github.com/thevictorgabriel/issue-Mindtranslate/issues/5)  |
| **#6** | Campo de confirmação de senha ausente no Register.jsx | `Lógica`  | [Issue #6](https://github.com/thevictorgabriel/issue-Mindtranslate/issues/6) |



## 3. Evidências dos Testes de Validação

Para cada bug corrigido, a evidência de validação foi documentada diretamente na descrição do Pull Request correspondente, conforme solicitado pelo plano de trabalho. [cite_start]As evidências consistem em relatórios manuais de teste, incluindo screenshots e GIFs que demonstram o comportamento do sistema "antes" e "depois" da correção.

Isso garante que a validação esteja contextualizada com a revisão do código, simulando um ambiente de desenvolvimento profissional onde a prova da correção é um pré-requisito para a integração do código.
