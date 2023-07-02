#/usr/bin/bash

yarn build && docker build -t clojurescript-frontend . && docker build -t golang-backend ./go/

sudo docker run -dit --name my-running-frontend -p 8080:80 clojurescript-frontend
sudo docker run -dit --rm --name my-running-backend -p 127.0.0.1:8181:8181 golang-backend
