# Base build
FROM --platform=linux/amd64 node:16-alpine AS base

RUN mkdir -p /app

EXPOSE ${PORT}

WORKDIR /app

COPY package.json tsconfig*.json nest-cli.json ./

COPY ./src/ ./src/

RUN yarn

# Development build
FROM --platform=linux/amd64 node:16-alpine AS development

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --from=base /app /app

ENTRYPOINT ["yarn", "start:dev"]

# Production build
FROM node:16-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --chown=node:node --from=base /app .

RUN yarn --production

USER node

CMD ["node", "dist/main"]