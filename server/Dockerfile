# Stage 1: Build the application
FROM node:20-alpine as builder

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire source code
COPY . .

# Generate Prisma client and Compile TypeScript to JavaScript
# This assumes you have prisma as a dev dependency and a prisma schema configured
RUN npx prisma generate && npm run build

# Stage 2: Setup the runtime environment
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy compiled JavaScript from builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "dist/main"]
