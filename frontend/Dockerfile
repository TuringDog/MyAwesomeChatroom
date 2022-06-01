FROM node:18.2.0-alpine
WORKDIR /frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]
EXPOSE 3000