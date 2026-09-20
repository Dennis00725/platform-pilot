# Start from Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

COPY . .

# Build the React app with backend service URL
ARG REACT_APP_API_URL=http://backend-service:5000
RUN REACT_APP_API_URL=$REACT_APP_API_URL npm run build


# Install a simple web server to serve the built app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the built app
CMD ["serve", "-s", "build", "-l", "3000"]
