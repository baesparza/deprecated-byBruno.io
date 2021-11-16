FROM node:12.18-alpine


# install typescript to use it accross all project
RUN npm install typescript -g

# swap working directory
# setup server dependecies
WORKDIR /usr/src/app
COPY ./server/package.json .
COPY ./server/package-lock.json* .
RUN npm install --ci --ignore-scripts

# setup client dependecies
WORKDIR /usr/src/app/build-client
COPY ./client/package.json ./
COPY ./client/package-lock.json* ./
RUN npm install --ci --ignore-scripts

# build server files in the base path
WORKDIR /usr/src/app 
COPY ./server/. .
RUN npm run build

# build site 
WORKDIR /usr/src/app/build-client
COPY ./client/. .
RUN npm run build

# back to base root and copy dependecies to work with the server
WORKDIR /usr/src/app 
RUN cp -r ./build-client/dist/. ./dist/static

# start server  
EXPOSE 5000
CMD ["npm", "run", "start"]
