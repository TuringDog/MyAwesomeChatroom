FROM node:18.2.0-alpine
WORKDIR /react
# ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN npm run build