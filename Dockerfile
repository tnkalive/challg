FROM node:lts-alpine  as develop-stage
RUN apk add --no-cache python3 make g++ libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm i -g @quasar/cli
COPY . .
# build stage
FROM develop-stage as build-stage
RUN npm install
RUN quasar build
# ssl stage (สร้าง self-signed cert)
FROM alpine:latest as ssl-stage
RUN apk add --no-cache openssl \
    && mkdir /ssl \
    && openssl req -x509 -nodes -days 365 \
       -subj "/C=TH/ST=Bangkok/L=Bangkok/O=Dev/OU=IT/CN=localhost" \
       -newkey rsa:2048 -keyout /ssl/nginx.key -out /ssl/nginx.crt
# production stage
FROM nginx:stable-perl as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
# คัดลอกไฟล์ SSL จาก ssl-stage
COPY --from=ssl-stage /ssl/nginx.crt /etc/nginx/ssl/nginx.crt
COPY --from=ssl-stage /ssl/nginx.key /etc/nginx/ssl/nginx.key
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]