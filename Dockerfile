# Stage 1: Build Quasar App
FROM node:18-alpine AS build


WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g @quasar/cli && quasar build

# Stage 2: Nginx serve static files
FROM nginx:1.25-alpine
# ลบไฟล์ default ของ nginx
RUN rm -rf /usr/share/nginx/html/*
# คัดลอกไฟล์ build จาก stage ก่อนหน้า
COPY --from=build /app/dist/spa /usr/share/nginx/html
# คัดลอกไฟล์ config nginx (optional ถ้าอยาก custom)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# เปิด port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
