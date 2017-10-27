# fetch basic image
FROM jetty:9.4.7

# application placed into /opt/app
ADD . /tmp/waitime
RUN GRADLE_USER_HOME=/tmp/home /tmp/waitime/gradlew build

# copy build to webapps
RUN cp /tmp/waitime/build/libs/WaitTimeManagement.war /var/lib/jetty/webapps/root.war
