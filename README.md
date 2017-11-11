# Wait Time Management

## Documentation
* TODO [User Documenation](UserManual.md)
* [Deployment Documentation](Deployment.md)
* TODO [UI Documenation](mockups/README.md)
* [Backend API Documenation](backend/README.md)
* TODO [DataModel Documenation](db/README.md)
* TODO [FrontEnd User Manual](frontend/README.md)

## Delivery to Emory (These instructions to be shared via email)

### Download public repo
Download: https://github.com/cs6440-the-a-team/Wait-Time-Management/archive/master.zip

or check out with git

``` unix
git clone https://github.com/cs6440-the-a-team/Wait-Time-Management.git
```

### Install Docker 
Instructions for your operating system can be found here: 
https://docs.docker.com/engine/installation/

### Build and run docker containers
This will launch 3 docker containers, one for the database, one for the frontend, and one for the backend. The front end will serve on port 80 for http and 443 for https SSL. You may test succesful deployment by navigating in your web browser to the hostname where this has been installed. If testing from the same server simply open http://localhost in your browser.

``` unix
docker-compose up
```

## Techstack
* Jetty v9.4.7
* JDK v1.8
* Gradle v3.5
* Docker v17.09.0-ce
* NodeJS v8.9.1 LTS
* MySQL v8.0.3
