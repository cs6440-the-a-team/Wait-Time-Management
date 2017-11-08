# Node image
FROM node:9
# Copy project files
ADD . /code
# Change working directory
WORKDIR /code
# Install dependencies
RUN npm install --quiet
# Run the application
CMD ["node", "server.js"]