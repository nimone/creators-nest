# Stage 1: Install dependencies and build the application
FROM node:lts-alpine AS builder

RUN apk add --no-cache openssl 

# Set the working directory
WORKDIR /tmp/app

COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

RUN npx prisma generate

RUN npm run build

# Stage 2: Create a minimal runtime image
FROM node:lts-alpine

RUN apk add --no-cache openssl

WORKDIR /app
ENV NODE_ENV=production

# Copy the built application from the builder stage
COPY --from=builder /tmp/app .

ENV PORT=5000
EXPOSE 5000

# Command to start the application
CMD ["npm", "run", "start"]
