FROM node:18.2.0-alpine
# create a work directory called react in our container
WORKDIR /react
# ENV PATH="./node_modules/.bin:$PATH"
# copy everything(all files/directories on the same level as this Dockerfile into our workdir in container)
COPY . .
# CMD npm install
CMD npm start
# RUN npm run build