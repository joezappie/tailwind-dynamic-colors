# Use a lightweight Node.js image
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY --from=monorepo /packages ./packages
COPY --from=monorepo /package.json /package-lock.json ./
RUN npm ci

WORKDIR /app/packages/docs

# Build the Vite project
RUN npm run build

# Use a lightweight web server for static hosting
FROM nginx:alpine AS runner

# Copy built files from the previous stage
COPY --from=builder /app/packages/docs/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]