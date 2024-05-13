# Backend server

## How to run the project

1. Pull this repository to your device <br/>
   <code>[git clone https://github.com/vladimirkhvan/backend-test](https://github.com/vladimirkhvan/backend-test.git)</code>
2. Navigate to directory
   <code>cd backend-test</code>
3. Create a .env file (example below)
4. Initialize DB by running
   <code>node scripts/seed.js</code>
5. Run 
   <code>npm i</code>
6. Run 
   <code>npm run build</code>
7. Run 
   <code>npm run start</code>
8. Open [http://localhost:3000](http://localhost:3000/)

## example .env file

REDIS_URL = redis://  <br /> 
POSTGRES_URL="postgres://
