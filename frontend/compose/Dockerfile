# Use an official Node.js runtime as a base image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./frontend/package*.json /app/

# Install app dependencies
RUN npm install

# Copy the app source code to the working directory
COPY ./frontend/ /app/

# Build the React app
RUN npm run build

# Set the PORT environment variable
ENV PORT=3006
# Set the auto reload environment variable
ENV CHOKIDAR_USEPOLLING=true
ENV FAST_REFRESH=false

# Use React server for development mode, disable NGINX below
CMD ["npm", "start"]

## Uncomment below for production ##

# # Use a smaller base image for the production build
# FROM nginx:alpine

# # Copy the build files to the NGINX web server directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Copy NGINX configuration
# COPY --from=build /app/compose/nginx/ /etc/nginx/conf.d/

# # Start NGINX
# CMD ["nginx", "-g", "daemon off;"]
