# Base image with Node.js 20 for compatibility
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy dependency files and optionally .npmrc for auth
COPY package*.json ./
# COPY .npmrc .npmrc  # Uncomment if using a private npm registry
RUN npm ci

# Build the Next.js app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=true
RUN npm run build

# Final runtime image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=true
ENV PORT=8081

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only the required build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Use non-root user
USER nextjs

# Expose the Next.js port
EXPOSE 8081

# Start the application
CMD ["npm", "start"]
