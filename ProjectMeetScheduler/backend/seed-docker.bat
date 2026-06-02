@echo off
REM =============================================================
REM Seed Docker: ProjectMeetScheduler
REM Usage: seed-docker.bat  (run from the backend folder)
REM =============================================================

SET POSTGRES_CONTAINER=projectmeetscheduler-postgres
SET DB_NAME=schedulingmanagementsystem_product_projectmeetscheduler
SET DB_USER=postgres
SET SEED_FILE=sql\seed.sql

echo =^> Starting containers...
docker compose up -d

echo =^> Waiting 30 seconds for backend to finish creating tables...
timeout /t 30 /nobreak

echo =^> Copying seed file into postgres container...
docker cp "%SEED_FILE%" %POSTGRES_CONTAINER%:/tmp/seed.sql

echo =^> Running seed against database '%DB_NAME%'...
docker exec -it %POSTGRES_CONTAINER% psql -U %DB_USER% -d %DB_NAME% -f /tmp/seed.sql

echo =^> Seed completed!
pause
