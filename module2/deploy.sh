#!/bin/bash

# Remove the existing container
docker rm -f module2

# Remove the existing image
docker rmi module2-img

# Build the Docker image
docker build -t module2-image .

# Run the Docker container
docker run -p 3003:3002 -d --name module1 module1-image