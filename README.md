### Z-PREFIX-CRUD

## Installation

# Backend

Clown down the repository

```
git clone git@github.com:Tollhouse/z-prefix-CRUD.git
```

Navigate to the server

```
cd server
```

Run
```
docker run --rm --name db -e POSTGRES_PASSWORD=password -d -p 1000:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```

Followed by 
```
docker exec -it db psql -U postgres
```

Then make the tables required with
```
CREATE DATABASE users;
```
```
CREATE DATABASE item;
```

Run the following to get out of the docker instance
```
\q
```

Once back in the main terminal run
```
npx knex migrate:latest
```

IF you would like seeded test data you can run
```
npx knex seed:run
```

Initilize the server with
```
node index.js
```

You should get a response back that looks like
```
Express server listening on 3000
```

# Frontend

Navigate back to the main directory with
```
cd ..
```
Navigate to the client directory
```
cd client
```

Run
```
npm start
```

With both of these componenets active you should be able to use the app