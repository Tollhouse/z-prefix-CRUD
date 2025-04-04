# Z-PREFIX-CRUD

## Installation

### Backend

Clone down the repository

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

### Frontend

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

### App Usage

Will start on the login page which will let you create a user with new user button, check inventory for the full inventory that is seeded with dummy data at the moment and a login button.

The dummy users are 
Username DD
Password 1234

Username JS
Password 1212

Username JJ
Password 1313

Logging into these accounts will then send you to the item these accounts have associated with them.

Creating a new account will let you set a username, password along with first and last name.

When complete and you hit the create account button it will send you back to the login page where you can login to the new account.

Doing that with a new account will take you to my inventory page where you can create new items or edit your profile and view the full inventory.

Edit profile will take you to a page where you can change your username, password, first and last name.

Hitting create new item will navigate to the item creation page where you can set the name, description and quantity upon inputing the information and clicking create item you will be redirected back to the my inventory page.

If you have made a new item you can now see that it is displayed on the my inventory page with 3 buttons. view, delete, edit

View will take you to the full information view of the time with buttons to return to the full inventory or my inventory

Delete will delete the item from the database and remove it from the my inventory page.

Edit will take you to the edit page where you can change the information for that item.
