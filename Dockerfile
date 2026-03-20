# Estágio 1: Dependências
FROM node:20-alpine AS deps
WORKDIR /app

# Copiar arquivos de package para instalar dependências
COPY package.json package-lock.json* ./
RUN npm ci

# Estágio 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variáveis de ambiente de build (opcional)
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Estágio 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários do estágio builder
# O modo standalone do Next.js copia apenas o que é necessário para rodar o servidor
COPY --from=builder /app/public ./public

# Configurar permissões para o cache do Next.js
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar o build standalone e arquivos estáticos
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# Definir o hostname como 0.0.0.0 para permitir conexões externas no container
ENV HOSTNAME "0.0.0.0"

# O servidor standalone é gerado em 'server.js'
CMD ["node", "server.js"]
