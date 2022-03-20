# musala-code-challenge

A simple RESTful API and React app for Gateway mangement system

#### Tech Stack
  - [NodeJS](https://nodejs.org/dist/latest-v16.x/docs/api/) - JavaScript runtime
  - [Express](https://expressjs.com/) - minimalist web framework for Node.js
  - [MongoDB](https://www.mongodb.com/) - document-oriented NoSQL database used for high volume data storage
  - [Mongoose](https://mongoosejs.com/) - mongodb object modeling.
  - [Axios](https://axios-http.com/) - HTTP client for the browser.
  - [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [ReactRouter](https://reactrouter.com/docs/en/v6) -  
  - [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript

### Run the project
Run in terminal `docker-compose up` this will run the database, API server on port 8000 & Front End on port 3000

**NOTE** need to populate the database with some data
- extract `./musala-gateway-mgmt-sys.zip` into `./dump`
- Run
```bash
docker cp ./dump <container_name>:/dump

docker exec -i <container_name> /usr/bin/mongorestore --username <username> --password <password> --authenticationDatabase admin --db <database_name> /dump/<database_name>
```


Open your browser on `http://localhost:3000`

### Available routes
#### FrontEnd
baseURL = `http://localhost:3000`
- Home - `baseURL/`
    - Display list / table of all the gateways available in the db
- Gateway Details - `baseURL/gateways/:id`
    - Display all the gateway details with its associated devices, you can add or delete a device from this page
- Add Gateway - `baseURL/add-gateway`
    - Displays a form where a new gateway can be added

#### API
baseURL = `http://localhost:8000`
 - GET `baseURL/gateways` retrive a list of all the stored gateways
 - POST `baseURL/gateways` adds a new gateway to the system
 - PUT `baseURL/gateways/:id` updates an existing gateway
 - DELETE `baseURL/gateways/:d` delete an existing gateway
 - POST `baseURL/gateways/:gatewayId/device` adds a device to an existing gateway
 - DELETE `baseURL/gateways/:gatewayId/device/:deviceId` delete an existing device on an existing gateway
