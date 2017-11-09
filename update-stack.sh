#!/bin/bash

echo "Getting new code from github.gatech.edu"
git pull origin
echo "Shutting down services..."
sudo docker-compose down
echo "Rebuilding services and starting again..."
sudo docker-compose up --build -d
