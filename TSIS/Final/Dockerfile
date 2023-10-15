# Stage 1: Build the Angular application
FROM node:16 as build

WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Angular application in production mode
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Remove default nginx configuration and content
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

# Copy the built application from the previous stage
COPY --from=build /app/dist/Final/ /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
