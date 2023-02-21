FROM node:14.20.1-alpine

# setup workspace
RUN mkdir -p /home/app
WORKDIR /home/app

# install angular
RUN npm install -g @angular/cli

# copy dependency files
COPY package.json /home/app/package.json

# install dependencies
RUN npm install

# RUN server
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000", "--port", "4200", "--disable-host-check"]

# Imagen que se usa cuando la APP angular aun no esta creada
# RUN npm install -g @angular/cli
# USER node
# WORKDIR /app
# EXPOSE 4200 49153
# CMD npm start