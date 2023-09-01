FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "run", "start" ]
