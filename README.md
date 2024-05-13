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

## How to use

Enpoint 1 - GET http://localhost:3000 <br/>
Params - none <br/>
Response: <br/>
<code>[{
    "market_hash_name": "10 Year Birthday Sticker Capsule",
    "currency": "EUR",
    "suggested_price": 0.88,
    "item_page": "https://skinport.com/item/10-year-birthday-sticker-capsule",
    "market_page": "https://skinport.com/market?item=10%20Year%20Birthday%20Sticker%20Capsule&cat=Container",
    "max_price": 4.05,
    "mean_price": 1.47,
    "median_price": 1.25,
    "quantity": 256,
    "created_at": 1661324437,
    "updated_at": 1715638249,
    "min_untradable": 0.72,
    "min_tradable": 0.87
}]</code> <br/>
min_untradable - minimum untradable price  <br/>
min_tradable - minimum tradable price  <br/> <br/>

Enpoint 2 - PATCH http://localhost:3000 <br/>
Params - <code>{ id: 1, withdrawalAmount: 100 }</code> <br/>
id - user's id <br/>
withdrawalAmout - withdrawal amount <br/>
Response: <br/>
<code>{
id: 1,
balance: 900
}</code> <br/>
id - user's id <br/>
balance - balance after withdrawal <br/>

## example .env file

REDIS_URL = redis://  <br /> 
POSTGRES_URL="postgres://
