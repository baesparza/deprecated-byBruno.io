FROM node:12.18-alpine

# swap working directory
WORKDIR /usr/src/app

# install typescript to use it accross all project
RUN npm  install typescript -g

# copy server instalation files & dependecies and libs
COPY ["server/package.json", "server/package-lock.json*"]

# install everything needed 
RUN npm install --ci --ignore-scripts

# copy source code 
COPY ./server/. .

# build source code
RUN npm run build

# default expose port 5000 for servers
EXPOSE 5000

# command to run application
CMD ["npm", "run", "start"]
