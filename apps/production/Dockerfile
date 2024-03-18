# Stage 1: Build for Staging
FROM node:18.15.0-alpine AS build-stage
WORKDIR /app
COPY ./package.json ./
COPY ./nest-cli.json ./
COPY ./tsconfig.build.json ./tsconfig.json ./
COPY ./apps/production ./apps/production/
RUN npm install
RUN npm run build:production

# Stage 2: Build for Production
FROM node:18.15.0-alpine AS production-stage
WORKDIR /app
COPY ./package.json ./
RUN npm install 
COPY --from=build-stage /app/dist ./dist

CMD ["npm","run","start:production:prod"]
