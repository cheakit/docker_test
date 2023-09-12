FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

ENV PORT 3000
EXPOSE $PORT

CMD ["pnpm", "start"]