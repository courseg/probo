# --- Stage 1: Build the App ---
FROM golang:alpine AS builder

# Install build dependencies
RUN apk add --no-cache nodejs npm make git bash

WORKDIR /app

# Copy all source code
COPY . .

# 1. Install Go Dependencies
RUN go mod download

# 2. Install Node.js Dependencies
RUN npm ci

# 3. Build the Application
RUN make build

# --- Stage 2: Runtime Environment ---
FROM alpine:latest

# UPDATED: Added 'openssl' to this list so the entrypoint can generate keys
RUN apk add --no-cache ca-certificates bash nodejs openssl

WORKDIR /app

# Copy the built binary and config templates
COPY --from=builder /app/bin/probod /usr/local/bin/probod
COPY --from=builder /app/cfg /app/cfg
COPY --from=builder /app/entrypoint.sh /usr/local/bin/entrypoint.sh

# Make them executable
RUN chmod +x /usr/local/bin/probod /usr/local/bin/entrypoint.sh

# Start the app
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["/usr/local/bin/probod"]
