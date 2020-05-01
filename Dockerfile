FROM node:12-alpine

ENV TZ Asia/Tokyo
ENV LANG ja_JP.UTF-8
ENV LC_ALL C.UTF-8
ENV ROOT_DIR /var/www/html

WORKDIR $ROOT_DIR

COPY . $ROOT_DIR

RUN yarn install

EXPOSE 8080

CMD ["yarn", "start"]
