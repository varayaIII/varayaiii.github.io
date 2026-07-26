# Entorno de desarrollo reproducible.
# Uso: docker build -t victor-portfolio . && docker run -p 4321:4321 -v $(pwd):/app victor-portfolio

FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host"]
