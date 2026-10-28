# Inventory Management API

A REST API for managing product inventory, built with Node.js, Express and MongoDB.

## Features

- Create, list, update and delete products (CRUD)
- Data validation with Mongoose schemas
- Environment variables for configuration

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [nodemon](https://nodemon.io/) (development)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally (or a MongoDB Atlas connection string)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ludimilladev/inventory-management.git
cd inventory-management
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root, using `.env.example` as a model:

```
MONGO_URI=mongodb://localhost:27017/inventory
```

4. Start the server:

```bash
npm start
```

The API will be running at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/`             | Check if the API is up   |
| POST   | `/products`     | Create a product         |
| GET    | `/products`     | List all products        |
| GET    | `/products/:id` | Get a product by id      |
| PUT    | `/products/:id` | Update a product         |
| DELETE | `/products/:id` | Delete a product         |

### Product model

| Field      | Type   | Required | Default |
|------------|--------|----------|---------|
| `name`     | String | Yes      | -       |
| `quantity` | Number | No       | 0       |
| `price`    | Number | Yes      | -       |

### Example request

`POST /products`

```json
{
  "name": "Pen",
  "quantity": 50,
  "price": 2.5
}
```

## Roadmap

- [ ] Organize the code into routes, controllers and models
- [ ] Improve validation and error handling
- [ ] Stock movements (entries and exits)