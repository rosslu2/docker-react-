FROM node:14-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY . . 
RUN npm run build

# /app/build <-- files we need to run our app

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html