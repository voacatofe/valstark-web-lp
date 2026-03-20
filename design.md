# SYSTEM INSTRUCTION: VALSTARK DESIGN SYSTEM & UI GUIDELINES

## 1. CONCEITO CENTRAL (A VIBE)
O design deve transparecer a união entre **Força Bruta Industrial** e **Precisão Tecnológica Micrométrica**. 
Estamos vendendo cofres físicos de alta segurança, peso, contagem de notas e blindagem, mas com cérebros digitais e software proprietário. 
**Palavras-chave:** Robusto, Inviolável, Engenharia de Ponta, Cyber-Físico, Tolerância Zero, Militar, Blueprint.

## 2. PALETA DE CORES (Obrigatório seguir estritamente)
* **Background (Fundo):** Preto profundo ou cinza quase preto (Ex: `#09090b` ou `#000000`).
* **Background Detail (Grid):** O fundo não é sólido. Deve conter um padrão de grid (grade) extremamente sutil, linhas finas e escuras (Ex: `#1a1a1a`), remetendo a papel milimetrado de engenharia.
* **Accent Color (Destaque):** Laranja/Vermelho vibrante (Ex: `#FF4500` ou `#E63946`). Usado para pontuar palavras-chave, ícones, linhas divisórias finas e microtextos. NUNCA usar em blocos grandes, apenas em acentos.
* **Text Primary (Texto Principal):** Branco puro (`#FFFFFF`) ou Gelo (`#F1F5F9`) para títulos e alto contraste.
* **Text Secondary (Texto Base):** Cinza médio/claro (Ex: `#9CA3AF` ou `#A1A1AA`) para parágrafos. Não deve competir com os títulos.
* **Borders (Bordas):** Cinza muito escuro (Ex: `#27272A`), quase imperceptível, usado para delimitar áreas sem criar "caixas" pesadas.

## 3. TIPOGRAFIA E HIERARQUIA
* **Família de Fontes:** Sans-serif geométrica, limpa e moderna (Ex: Inter, Roboto, Montserrat, Space Grotesk).
* **Títulos (H1, H2):** Letras maiúsculas (UPPERCASE), peso Extra-Bold ou Black. Quebra de linha estratégica para impacto. Algumas palavras no título podem estar na cor Accent.
* **Corpo de Texto (P):** Peso Regular ou Light. Entrelinhas espaçado (line-height alto, ex: 1.6) para facilitar a leitura e dar respiro.
* **Micro-copy (Rótulos, Tags, Capítulos):** Letras maiúsculas, fonte bem pequena (ex: 10px ou 12px), com espaçamento entre letras largo (letter-spacing: 2px). Exemplos da identidade: `VOL.01`, `--- DNA VALSTARK`.

## 4. ELEMENTOS DE UI E COMPOSIÇÃO (A "Assinatura" Visual)
* **Assimetria Balanceada:** Evite layouts centralizados tradicionais. Prefira dividir a tela (ex: 40% texto de impacto na esquerda, 60% cards técnicos na direita).
* **Cards de Informação (Módulo Right-Side):**
    * Fundo do card: Transparente ou levemente mais claro que o fundo principal (Ex: `rgba(255,255,255,0.02)`).
    * Bordas: Muito finas.
    * **O DETALHE CRUCIAL:** Os cantos dos cards devem ter "miras" ou "brackets" (cantoneiras), lembrando interfaces de HUD (Head-Up Display) ou focos de câmeras de segurança (Ex: os sinais ⌜ e ⌝ nos cantos).
* **Ícones:** Estilo "Line art" (linhas finas), sempre na cor Accent (Laranja). Minimalistas e técnicos (ex: engrenagens, globos aramados, código).
* **Linhas Conectoras:** Uso de linhas horizontais ou verticais finas (1px) na cor Accent ou Cinza Escuro para separar seções lógicas, remetendo a réguas de medição.

## 5. TOM DE VOZ DO COPYWRITING
O texto gerado deve ser autoritário, técnico e direto. Sem floreios. Use termos da engenharia e da física (ex: *micrométrica, tolerância zero, arquitetura fechada, nível bancário, inviolabilidade mecânica*).

## 6. INSTRUÇÃO PARA GERAÇÃO DE CÓDIGO (Para a IA)
Sempre que for solicitado criar uma nova seção (HTML/Tailwind, React, etc), **você DEVE aplicar estas regras de design**. Se for gerar código Tailwind CSS:
1.  Use `bg-black` ou `bg-zinc-950`.
2.  Para o grid de fundo, sugira uma classe customizada com `background-image: linear-gradient(...)`.
3.  Para os cards, use `border border-zinc-800` e crie pseudo-elementos (`before/after`) para gerar as cantoneiras características nos vértices.
4.  Mantenha o contraste exato da imagem de referência.