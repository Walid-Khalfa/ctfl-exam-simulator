# Stage 1: Build stage
FROM node:20-alpine AS builder

# Install build dependencies if needed
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package configuration files
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies needed for building)
RUN npm ci

# Copy all source files
COPY . .

# Build the application (outputs to .output)
RUN npm run build

# Stage 2: Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Copy the built application from the builder stage
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start the application using the Nitro/TanStack Start server entry point
CMD ["node", ".output/server/index.mjs"]
