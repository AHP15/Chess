# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
# RUN npm install

# Copy the entire application code to the working directory
COPY . .

# RUn the prisma migration
RUN npx prisma migrate dev --name init
# Expose the desired port (e.g., 8080)
EXPOSE 3000

# Start the Node.js application
CMD ["node", "server.js"]
