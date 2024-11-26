FROM node:20-alpine AS base
LABEL org.opencontainers.image.source="https://github.com/nrmnqdds/imaluum-v2"

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS deps
RUN apt-get -y update && \
  apt-get install -yq openssl git ca-certificates tzdata && \
  ln -fs /usr/share/zoneinfo/Asia/Kuala_Lumpur /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
RUN pnpm run build

FROM base AS runner
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.vinxi ./.vinxi
EXPOSE 3000
CMD ["node", "./.output/server/index.mjs"]
