# node-express-cookie-cutter
An empty express project with JWT

# Run the project

1. Clone the repo (obviously).
2. You need docker and docker-compose to run the PostgreSQL server.
3. Copy .env.sample to .env (and make changes in the settings if you need)
3. Run the app

```
git clone git@github.com:tonybolanyo/node-express-cookie-cutter.git
cd node-express-cookie-cutter
docker-compose up -d
cp .env.sample .env
npm i
npm start
```

**The URLs**

- You can access the app in http://localhost:3000
- PostgresSQL docker has localhost:5432 published
- PG Admin 4: http://localhost:5433


