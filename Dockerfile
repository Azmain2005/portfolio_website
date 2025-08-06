# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /portfolio

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Stage 2: Serve the app with a static server
FROM node:18-alpine AS production

# Install a simple static file server
RUN npm install -g serve

# Set working directory
WORKDIR /portfolio

# Copy built assets from the builder
COPY --from=builder /portfolio/dist ./dist

# Expose the port Coolify will access (default: 3000)
EXPOSE 3002

# Start the app
CMD ["serve", "-s", "dist", "-l", "3002"]