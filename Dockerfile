FROM node:lts-alpine as builder

WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY . .

RUN npm run build


FROM semtech/ember-proxy-service:1.4.0

ENV STATIC_FOLDERS_REGEX "^/(js|css|files)/"

COPY ./proxy/file-upload.conf /config/file-upload.conf

COPY --from=builder /app/dist /app
