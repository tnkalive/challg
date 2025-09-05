# Stage 1: Build Quasar App
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json และ lockfile ก่อนเพื่อติดตั้ง dependencies
COPY package*.json ./

# ติดตั้ง dependencies
RUN yarn add

# ติดตั้ง quasar cli แยก global
# RUN yarn install -g @quasar/cli
RUN yarn global add @quasar/cli


# Copy source code ทั้งหมด รวมถึง quasar.config.js
COPY . .

# Run build
RUN quasar build

# Stage 2: Nginx serve static files
FROM nginx:1.25-alpine

# ลบไฟล์ default ของ nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy build result จาก stage ก่อนหน้า
COPY --from=build /app/dist/spa /usr/share/nginx/html

# (Optional) คัดลอก nginx.conf ถ้ามี custom
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
