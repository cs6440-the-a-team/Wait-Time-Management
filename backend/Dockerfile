# build war using jdk8
FROM java:8 AS BUILD_IMAGE
ENV APP_HOME=/root/dev/myapp/
WORKDIR $APP_HOME
COPY . $APP_HOME

# cache dependencies on volume 
RUN mkdir -p /root/.gradle
ENV HOME /root
VOLUME /root/.gradle

RUN ./gradlew clean build

# fetch jetty image
FROM jetty:9.4.7

# copy build to webapps
COPY --from=BUILD_IMAGE /root/dev/myapp/build/libs/WaitTimeManagement.war /var/lib/jetty/webapps/root.war

# jetty authorization
USER root
ADD ./jetty-etc/jetty.xml $JETTY_HOME/etc/jetty.xml 
RUN chmod $JETTY_HOME/etc/jetty.xml --reference=$JETTY_HOME/etc/jetty-stop.xml && chown $JETTY_HOME/etc/jetty.xml --reference=$JETTY_HOME/etc/jetty-stop.xml
ADD ./jetty-etc/webdefault.xml $JETTY_HOME/etc/webdefault.xml 
RUN chmod $JETTY_HOME/etc/webdefault.xml --reference=$JETTY_HOME/etc/jetty-stop.xml && chown $JETTY_HOME/etc/webdefault.xml --reference=$JETTY_HOME/etc/jetty-stop.xml
ADD ./jetty-etc/realm.properties $JETTY_HOME/etc/realm.properties 
RUN chmod $JETTY_HOME/etc/realm.properties --reference=$JETTY_HOME/etc/jetty-stop.xml && chown $JETTY_HOME/etc/realm.properties --reference=$JETTY_HOME/etc/jetty-stop.xml
USER jetty
