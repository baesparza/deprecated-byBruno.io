FROM node:14-alpine3.14

# install typescript to use it accross all project
RUN npm install typescript -g

# Installs latest Chromium (92) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

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
