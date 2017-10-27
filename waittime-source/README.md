## Build and Run locally
``` unix
./gradlew jettyRun
```
## (Re)build docker Image
``` unix
docker build -f Dockerfile -t waittime/java-backend:1 .
```
## Run docker container
``` unix
docker run -d -p 90:8080 -p 443:8443 {{container id}}
curl 0.0.0.0:90/waitingroom
>hello waitingroom!
```