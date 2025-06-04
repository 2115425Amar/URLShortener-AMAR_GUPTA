# Use official Node.js image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy only necessary files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose the backend port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
