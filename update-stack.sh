#!/bin/bash

echo "Getting new code from github.gatech.edu"
git pull origin
echo "Shutting down services..."
sudo docker-compose down
echo "Removing images with tag of <none>"
sudo docker rmi $(sudo docker images | grep "<none>" | tr -s " " | cut -d " " -f 3)
echo "Rebuilding services and starting again..."
sudo docker-compose up --build --force-recreate -d
