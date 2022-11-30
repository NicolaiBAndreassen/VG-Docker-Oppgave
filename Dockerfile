FROM node:18 as builder
ARG PUBLIC_URL=/
ARG NODE_ENV=production

WORKDIR /app
COPY . .

RUN npm ci 
RUN npm run build

FROM httpd:latest AS server

COPY --from=builder /app/build/ /usr/local/apache2/htdocs

ENV NODE_ENV=production
ENV PUBLIC_URL=/

EXPOSE 80