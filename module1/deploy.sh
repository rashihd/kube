#!/bin/bash

# Remove the existing container
docker rm  module1 -f

# Remove the existing image
docker rmi module1-img -f

# Build the Docker image
docker build -t module1-image .

# Run the Docker container
docker run -p 3000:3001 -d --name module1 module1-image
