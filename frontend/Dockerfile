# Node image
FROM node:9
# Copy project files
ADD . /code
# Change working directory
WORKDIR /code
# Install dependencies
RUN npm install --quiet --production
# Set the flag for the node environment to production
ENV NODE_ENV="production"

# Run the application
CMD ["node", "server.js"]