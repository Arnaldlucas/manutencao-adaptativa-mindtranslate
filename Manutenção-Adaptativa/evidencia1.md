# Evidência da Estratégia 1: Adaptação a Cenário de Regulamentação (LGPD)

## 1. Problema Adaptativo Enfrentado

O sistema **MindTranslate**, em sua versão inicial, não estava em conformidade com práticas modernas de proteção de dados e regulamentações como a LGPD, que exigem o consentimento explícito do usuário para a coleta e processamento de seus dados.

O formulário de registro original permitia que um novo usuário criasse uma conta sem confirmar que havia lido e concordado com os Termos de Uso da plataforma. Esta manutenção adaptativa foi executada para corrigir essa inconformidade.

## 2. Adaptação Implementada

Para adaptar o sistema a este novo requisito regulatório, a seguinte funcionalidade foi implementada na página de Registro (`Register.jsx`):

-   **Adição de um Campo de Consentimento:** Um `checkbox` com o texto "Eu li e concordo com os Termos de Uso" foi adicionado à interface.
-   **Lógica de Habilitação do Botão:** O botão "Cadastrar" agora inicia desabilitado e só se torna ativo após o usuário marcar o `checkbox` de consentimento.
-   **Acesso aos Termos (Modal):** Para melhorar a experiência do usuário, o link "Termos de Uso" agora abre um modal (pop-up) com o texto dos termos, mantendo o usuário no fluxo de cadastro.

## 3. Evidências de Funcionamento (Antes e Depois)

As imagens abaixo demonstram o comportamento do sistema antes e depois da adaptação, comprovando a eficácia da manutenção.

### Antes da Adaptação

O formulário de registro não continha nenhum mecanismo para o consentimento do usuário.

![Imagem do WhatsApp de 2025-10-01 à(s) 05 30 38_7c6a37a2](https://github.com/user-attachments/assets/7c1c6802-793b-455e-9da0-e3fbd30e7fe8)

### Depois da Adaptação

A nova interface agora inclui o `checkbox` de consentimento e a lógica de habilitação do botão, garantindo a conformidade.

**1. Estado Inicial (Botão Desabilitado):**
O botão "Cadastrar" inicia desabilitado, pois o consentimento ainda não foi dado.

![Imagem do WhatsApp de 2025-10-01 à(s) 05 47 02_504cf550](https://github.com/user-attachments/assets/0fa8f438-6709-4951-bcaf-a6c8d69b51ae)


**2. Modal de Termos de Uso:**
O link para os "Termos de Uso" abre um modal informativo sem tirar o usuário da página.

![Imagem do WhatsApp de 2025-10-01 à(s) 05 31 16_453fddce](https://github.com/user-attachments/assets/8a29efd8-b96d-41d3-a12e-e7a7d6884f5e)


**3. Estado Habilitado (Após Consentimento):**
Após marcar o `checkbox`, o botão "Cadastrar" se torna ativo, permitindo que o usuário finalize o registro.

![Imagem do WhatsApp de 2025-10-01 à(s) 05 55 47_4daba3f9](https://github.com/user-attachments/assets/38e6c2d5-be55-49cb-939a-8c765f615f29)


---

**Link para o Pull Request da Correção:** [PR #2 - feat(register): Adiciona consentimento de Termos de Uso (LGPD)](https://github.com/Arnaldlucas/manutencao-adaptativa-mindtranslate/pull/2)
