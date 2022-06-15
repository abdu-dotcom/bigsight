# Define Base Image
# FROM telkomindonesia/alpine:nodejs-14
FROM telkomindonesia/debian-buster:nodejs-16

# Change Working Directory
WORKDIR /usr/src/app

# Copy Package Dependencies List to Working Directory
COPY . /usr/src/app/

RUN rm -Rf /usr/src/app/node_modules

RUN mkdir /usr/src/app/node_modules

RUN chmod 777 -Rf /usr/src/app

# Install Package Dependencies
# RUN apk add --update --no-cache --virtual .build-dev \
#       build-base \
#       python python-dev \
#     && npm i -g npm \
#     && npm i -g node-gyp \
#     && npm i \
#     && npm run build \
#     && apk del .build-dev


# RUN npm i -g npm
# RUN npm i -g node-gyp
RUN npm i
RUN npm run build

# RUN npm start &

# RUN apt-get update
# RUN apt-get install nginx -y

# RUN cp .nginx/bigsight.com /etc/nginx/sites-available/

# RUN service nginx start

#install phantomJS

  
# Copy All Source Code to Working Directory
# COPY . /usr/src/app/

USER user

# Expose Application Port
EXPOSE 3000

# Run Application
CMD ["npm","run","start"]
