# Use Node.js 20
FROM node:20

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port the app runs on (not necessary for networking within Docker, but documents intent)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:dev"]
