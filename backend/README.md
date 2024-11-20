# spaceflight-booking-api

Backend API for searching, booking, and managing SpaceX Starship flights.

for now
cd backend
docker build -t spaceflight-api .
docker run -p 3000:3000 --env-file .env -v $(pwd):/app spaceflight-api
