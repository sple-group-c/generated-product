#!/bin/bash
# =============================================================
# Seed Docker: ProgrammingProjectManagement
# Usage: bash seed-docker.sh
#
# What this does:
#   1. Starts docker-compose (if not already running)
#   2. Waits for the backend to finish creating tables via Hibernate
#   3. Copies seed.sql into the postgres container
#   4. Runs it against the database
# =============================================================

POSTGRES_CONTAINER="programmingprojectmanagement-postgres"
BACKEND_CONTAINER="programmingprojectmanagement-backend"
DB_NAME="programmingprojectmanagement"
DB_USER="postgres"
SEED_FILE="sql/seed.sql"

echo "==> Starting containers..."
docker compose up -d

echo "==> Waiting for backend to finish creating tables..."
until docker logs "$BACKEND_CONTAINER" 2>&1 | grep -q "Started\|Hibernate\|listening\|ready\|Server started"; do
  echo "    Backend not ready yet, retrying in 5s..."
  sleep 5
done
# Extra buffer to let Hibernate finish DDL
sleep 10
echo "    Backend is ready."

echo "==> Copying seed file into postgres container..."
docker cp "$SEED_FILE" "$POSTGRES_CONTAINER":/tmp/seed.sql

echo "==> Running seed against database '$DB_NAME'..."
docker exec -it "$POSTGRES_CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -f /tmp/seed.sql

echo "==> Seed completed!"
