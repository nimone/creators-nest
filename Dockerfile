# Stage 1: Install dependencies and build the application
FROM node:lts-alpine AS builder

RUN apk add --no-cache openssl 

# Set the working directory
WORKDIR /tmp/app

RUN npm install -g bun

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy the rest of the application files
COPY . .

RUN bunx prisma generate

RUN bun run build

# Stage 2: Create a minimal runtime image
FROM node:lts-alpine

RUN apk add --no-cache openssl

WORKDIR /app
ENV NODE_ENV=production

RUN npm install -g bun
# Copy the built application from the builder stage
COPY --from=builder /tmp/app .

ENV PORT=3000
EXPOSE 3000

# Command to start the application
CMD ["bun", "run", "start"]
