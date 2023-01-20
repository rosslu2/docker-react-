FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY . /app 
RUN npm run build

# /app/out <-- static files we need to run our app

FROM nginx
EXPOSE 80
COPY --from=builder /app/out /usr/share/nginx/html