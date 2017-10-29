# fetch basic image
FROM jetty:9.4.7

# copy build to webapps
ADD ./build/libs/WaitTimeManagement.war /var/lib/jetty/webapps/root.war

# jetty authorization
USER root
ADD ./jetty-etc/jetty.xml $JETTY_HOME/etc/jetty.xml 
RUN chmod $JETTY_HOME/etc/jetty.xml --reference=$JETTY_HOME/etc/jetty-stop.xml && chown $JETTY_HOME/etc/jetty.xml --reference=$JETTY_HOME/etc/jetty-stop.xml
ADD ./jetty-etc/webdefault.xml $JETTY_HOME/etc/webdefault.xml 
RUN chmod $JETTY_HOME/etc/webdefault.xml --reference=$JETTY_HOME/etc/jetty-stop.xml && chown $JETTY_HOME/etc/webdefault.xml --reference=$JETTY_HOME/etc/jetty-stop.xml
ADD ./jetty-etc/realm.properties $JETTY_HOME/etc/realm.properties 
RUN chmod $JETTY_HOME/etc/realm.properties --reference=$JETTY_HOME/etc/jetty-stop.xml && chown $JETTY_HOME/etc/realm.properties --reference=$JETTY_HOME/etc/jetty-stop.xml
USER jetty
