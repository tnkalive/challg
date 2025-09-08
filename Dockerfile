# ssl-stage (New Stage)
# สร้าง stage เพื่อคัดลอกไฟล์ SSL Certificate และ Key จาก Host
FROM alpine:latest as ssl-stage
# ตั้งค่า directory ที่เก็บไฟล์ SSL บน Host ของคุณ
WORKDIR /ssl
# คัดลอกไฟล์ SSL Certificate และ Private Key
COPY ../nginx/ssl/nginx.crt /ssl/nginx.crt
COPY ../nginx/ssl/nginx.key /ssl/nginx.key
# develop stage
FROM node:lts-alpine  as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i -g @quasar/cli
COPY . .
# build stage
FROM develop-stage as build-stage
RUN npm install
RUN quasar build
# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
# คัดลอกไฟล์ SSL จาก ssl-stage
COPY --from=ssl-stage /ssl/nginx.crt /etc/nginx/ssl/nginx.crt
COPY --from=ssl-stage /ssl/nginx.key /etc/nginx/ssl/nginx.key
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]







# # Stage 1: Build the application
# FROM node:lts-alpine as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN yarn install
# COPY . .
# RUN quasar build 
# # Stage 2: Serve the application with Nginx
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]