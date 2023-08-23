# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
# COPY . .

# Build the TypeScript React app
RUN npm run build

# Expose the desired port
EXPOSE 3000

# Start the React app when the container runs
CMD ["npm", "start"]
