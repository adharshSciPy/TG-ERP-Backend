# Base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port that the server will be listening on
EXPOSE 5000

# Start the Node.js server
CMD [ "node", "server.js" ]
