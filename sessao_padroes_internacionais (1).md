## **Briefing de Desenvolvimento: Faixa de Confiança Global (Certificações & Parceiros)**

**Projeto:** Valstark Global Landing Page B2B **Módulo:** Dobra  – *Social Proof* & Conformidade Internacional **Objetivo da Sessão:** Comunicar instantaneamente aos tomadores de decisão globais (Diretores de Operações e CTOs) que o *hardware* da Valstark possui grau de segurança e conformidade exigidos pelos mercados europeu e norte-americano. Esta sessão reduzirá o atrito de compra e validará nossa autoridade.

---

### **1\. Estrutura e Arquitetura Visual**

A sessão deve ser uma faixa horizontal (estilo *ribbon* ou *marquee*) posicionada logo abaixo da dobra ValidationB2B. Ela precisa transmitir elegância, leveza e minimalismo industrial.

* **Fundo (Background):** Utilize nosso Cinza Chumbo (**\#424242**) para criar um bloco de estabilidade visual ou Preto (**\#212121**) para máximo contraste. O fundo escuro transmite a "solidez e profissionalismo" exigidos pelo nosso *Brand Book*.  
* **Grid/Alinhamento:** Use `display: flex` com `justify-content: space-between` ou `space-around` (dependendo da largura da tela). Os elementos devem estar centralizados verticalmente (`align-items: center`).  
* **Responsividade (Mobile):** Em dispositivos móveis, não empilhe todos os selos verticalmente (isso criaria uma rolagem infinita e tediosa). Utilize um carrossel contínuo (animação CSS *marquee* infinita) ou um scroll horizontal com ocultação da barra de rolagem (`::-webkit-scrollbar { display: none; }`).

### **2\. Tratamento dos Assets (Os Selos)**

Para mantermos a elegância e não transformarmos a página em um "carnaval" de cores corporativas misturadas, você deverá tratar os arquivos originais baixados:

* **Formato Obrigatório:** Use apenas **SVG**. Nada de PNGs ou JPGs. SVGs garantem nitidez absoluta em telas Retina/4K e mantêm o tempo de carregamento da página abaixo de 2 segundos (crucial para SEO e conversão).  
* **Monocromia (O Segredo do Design Premium):** Remova as cores originais dos selos (CE, UL, FCC) via CSS ou no arquivo SVG (`fill="currentColor"`). Aplique a nossa cor Branca (**\#ededed**) com uma leve opacidade (ex: `opacity: 0.7`).  
* **Efeito Hover (Microinteração):** Quando o usuário passar o mouse (desktop), a opacidade do selo deve ir para `1.0` (100%) com uma transição suave (`transition: opacity 0.3s ease`). Isso cria uma interface tátil e moderna.

### **3\. Tipografia e Copywriting (O Texto)**

Siga rigorosamente a hierarquia tipográfica da Valstark:

* **Mini-Headline (Acima dos selos):** \* **Texto:** `ENGINEERED FOR GLOBAL COMPLIANCE & SECURITY`  
  * **Fonte:** Akira Expanded Super Bold.  
  * **Estilo:** Tamanho pequeno (ex: `12px` ou `14px`), *letter-spacing* bem aberto (ex: `2px` ou `3px`), cor Laranja Valstark (**\#ff5632**) para criar um ponto de luz e energia. Centralizado.  
* **Agrupamento:** Divida visualmente (com uma fina linha vertical `border-right: 1px solid rgba(237, 237, 237, 0.2)`) os selos de **Certificação** (CE, UL, FCC) dos logotipos de **Parceiros** (Prosegur, Zara, Intelbras).

### **4\. Checklist de Qualidade (Dev Jr. Guide)**

* \[ \] O arquivo SVG do "CE" manteve as proporções oficiais originais? (O espaçamento entre o C e o E é lei, não o altere).  
* \[ \] As margens de respiro (*padding*) entre os logos estão consistentes? (Use a propriedade `gap` do CSS Flexbox para garantir espaçamento idêntico).  
* \[ \] A sessão está carregando perfeitamente sem *Layout Shift* (CLS)? Defina dimensões explícitas `width` e `height` no código dos SVGs para evitar pulos na tela durante o carregamento.  
* \[ \] Acessibilidade: Todos os selos possuem a tag `aria-label` ou `alt`? (Ex: `aria-label="Certificação de Segurança UL"`). Tomadores de decisão em ambientes corporativos rígidos podem usar leitores de tela ou bloquear imagens de terceiros.

