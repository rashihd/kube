# Use the official Node.js v14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY app/ ./

# Expose the port the app will run on
EXPOSE 3002

# Start the app
CMD [ "node", "app.js" ]
