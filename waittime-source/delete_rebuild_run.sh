#/bin/bash

./gradlew clean build

docker stop waitime_container1
docker rm waitime_container1

docker build -f Dockerfile -t waittime/java-backend:1 .
docker run -d --name="waitime_container1" -p 80:8080 -p 443:8443 waittime/java-backend:1
open http://localhost
