FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN VITE_BACKEND_URL="" npm run build

RUN node -e " \
  const db = require('./src/staticPage/data/static-page-db-production.json'); \
  const fs = require('fs'); \
  fs.mkdirSync('build/static-json/static-data', {recursive: true}); \
  fs.writeFileSync('build/static-json/appearance.json', JSON.stringify(db.appearance)); \
  fs.writeFileSync('build/static-json/static-data.json', JSON.stringify(db['static-data'])); \
  db['static-data'].forEach(item => \
    fs.writeFileSync('build/static-json/static-data/' + item.id + '.json', JSON.stringify(item)) \
  ); \
"

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
