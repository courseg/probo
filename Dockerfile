# --- Stage 1: Build the App ---
FROM golang:1.23-alpine AS builder

# Install build dependencies (Node.js for frontend, Make/Git for backend)
RUN apk add --no-cache nodejs npm make git bash

WORKDIR /app

# Copy all source code
COPY . .

# Build the Frontend and Backend
# This runs the standard build commands from the repo's Makefile
RUN make build

# --- Stage 2: Runtime Environment ---
FROM alpine:latest

# Install runtime dependencies (Root CA certs for HTTPS, bash for scripts)
RUN apk add --no-cache ca-certificates bash

WORKDIR /app

# Copy the built binary and config templates from the builder stage
COPY --from=builder /app/bin/probod /usr/local/bin/probod
COPY --from=builder /app/cfg /app/cfg
# Copy entrypoint if it exists
COPY --from=builder /app/entrypoint.sh /usr/local/bin/entrypoint.sh

# Ensure everything is executable
RUN chmod +x /usr/local/bin/probod /usr/local/bin/entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["/usr/local/bin/probod"]
