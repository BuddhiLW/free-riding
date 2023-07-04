#/usr/bin/bash

docker build -t clojurescript-frontend . && docker build -t golang-backend ./go/

docker run -dit --name my-running-frontend -p 8282:80 clojurescript-frontend
docker run -dit --rm --name my-running-backend -p 8181:8181 golang-backend
