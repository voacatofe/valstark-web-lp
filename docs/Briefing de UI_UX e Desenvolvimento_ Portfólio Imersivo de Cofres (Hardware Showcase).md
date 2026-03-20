# **Briefing de UI/UX e Desenvolvimento: Portfólio Imersivo de Cofres (Hardware Showcase)**

**Para:** Equipe de Design e Front-end (Júnior) **Projeto:** Landing Page Global B2B Valstark **Objetivo:** Abandonar o formato "loja virtual com cards" e criar uma experiência de rolagem (*scroll*) imersiva e orgânica. O usuário deve sentir que está explorando a engenharia de um equipamento de elite, e não olhando uma prateleira de produtos.

---

### **1\. Regras Globais de Layout (O Fim do Grid Rígido)**

Nesta seção, não usaremos colunas ou caixas delimitadoras (*cards*). A estrutura será dividida em **3 Capítulos de Tela Cheia** (`min-height: 100vh` para cada bloco).

* **Fundo (Background):** A seção inteira deve ter um fundo contínuo e denso. Aplique um gradiente suave em CSS indo do nosso Preto (**\#212121**) para o Cinza Chumbo (**\#424242**).  
* **Marca D'água:** Insira o símbolo da Valstark (as três barras diagonais arredondadas) ocupando 80% da tela de fundo. Fixe o elemento (`position: sticky` ou `fixed`) com opacidade muito baixa (`opacity: 0.03`). Isso gera textura sem prejudicar a leitura.  
* **Padrão em Z (Z-Pattern):** Alterne o peso visual para guiar o olho do usuário:  
  * *Capítulo 1:* Imagem do cofre gigante à esquerda, textos à direita.  
  * *Capítulo 2:* Imagem do cofre gigante à direita, textos à esquerda.  
  * *Capítulo 3:* Imagem centralizada, textos orbitando ao redor.

### **2\. Tipografia e UI (O Guia de Estilo)**

A fonte aqui funciona como elemento de design 3D, interagindo com a imagem do cofre. Siga rigorosamente nossa identidade:

* **Títulos de Fundo (Headline dos Capítulos):**  
  * **Fonte:** Akira Expanded Super Bold.  
  * **Cor:** Branco (**\#ededed**).  
  * **Comportamento:** Tamanho gigante (ex: `font-size: 6rem` no desktop). O texto deve passar levemente *por trás* da imagem do cofre (use `z-index`).  
* **Nós de Informação Técnica (Sem Bullets):**  
  * **Fonte:** Roboto Regular ou Medium.  
  * **Cor:** Branco (**\#ededed**) com `opacity: 0.8`.  
  * **Detalhe de UI:** Crie uma linha fina horizontal na nossa cor Laranja (**\#ff5632**) conectando a imagem do cofre ao texto explicativo. Isso simula uma "planta de engenharia".  
* **Botões de Ação (CTAs):** Use links em texto limpo com uma seta simples `Explore a Engenharia ->`. Cor: Laranja (**\#ff5632**).

### **3\. O Conteúdo: Os 3 Capítulos de Rolagem**

Utilize imagens em alta resolução (formato `.webp` com fundo transparente) cruzando as bordas da tela (*bleed*).

**Capítulo 1: Linha Compact (Compact Pro & Fit Pro)**

* **Imagem:** Render do *Compact Pro* com a gaveta de depósito estendida. Posicionado à esquerda, "vazando" para fora da tela.  
* **Título Gigante (Akira):** `ESPAÇO MÍNIMO. INTELIGÊNCIA MÁXIMA.`  
* **Info Node 1 (Roboto):** Capacidade de 1.200 a 3.000 cédulas.  
* **Info Node 2 (Roboto):** Design com Boca de Lobo Oculta para maior discrição.

**Capítulo 2: Linha Mini & Multi**

* **Imagem:** Cofre *Mini Pro* com foco na tela Touch de 7 polegadas e no validador. Posicionado à direita.  
* **Título Gigante (Akira):** `ALTA VELOCIDADE. PRECISÃO ABSOLUTA.`  
* **Info Node 1 (Roboto):** Validação Multiespectral a 25 notas/s.  
* **Info Node 2 (Roboto):** Gestão de 5.000 a 7.500 cédulas com sistema Free Fall.

**Capítulo 3: Linha Smart & Plus (Tesouraria Massiva)**

* **Imagem:** *Cofre Plus* visto de um ângulo levemente inferior para dar sensação de imponência. Imagem centralizada.  
* **Título Gigante (Akira):** `OPERAÇÕES MASSIVAS. FLUXO ININTERRUPTO.`  
* **Info Node 1 (Roboto):** Alimentação de maços de 500 cédulas (12 notas por segundo).  
* **Info Node 2 (Roboto):** Sistema Escrow de retenção temporária e validação final.

### **4\. Animações e Performance (Obrigatório para o Dev Front-end)**

* **Scroll Reveal (Fade-in-up):** Nada deve estar estático na tela ao carregar. Utilize o *Intersection Observer API* no JS (ou uma biblioteca leve como GSAP/AOS). Quando o usuário rolar até o Capítulo, o título e a imagem devem "nascer" de baixo para cima (`transform: translateY(30px)` para `0`, com transição de opacidade).  
* **Parallax Sutil:** A imagem do cofre deve rolar na tela numa velocidade ligeiramente diferente do texto de fundo (Akira). Isso cria a profundidade 3D desejada.  
* **Otimização:** Atribua tamanhos explícitos (`width` e `height`) nas imagens para evitar *Cumulative Layout Shift (CLS)* e garanta que o carregamento não trave a rolagem.

