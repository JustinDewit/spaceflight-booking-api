# Build stage
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

# Development stage
FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=builder /app/dist ./dist
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
