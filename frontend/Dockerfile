FROM node:18.2.0-alpine
WORKDIR /app/frontend
# ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
ENV PORT=3000

# CMD ["npm","start"]
RUN npm run build
EXPOSE ${PORT}