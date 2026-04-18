# Users & Orders API

## Project Description

This project is a backend application built using Node.js, Express, and Sequelize.

It demonstrates:

* Creating models
* Defining relationships between models
* Performing full CRUD operations
* Using Sequelize migrations

The system manages:

* Users
* Orders

### Relationship

* One User has many Orders
* One Order belongs to one User

---

## Technologies Used

* Node.js
* Express.js
* Sequelize ORM
* Sequelize CLI
* SQLite

---

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Run migrations

```bash
npx sequelize-cli db:migrate
```

### 3. Run the project

```bash
npm run dev
```

---

## How to Run the Project

After running the server, it will be available at:

```bash
http://localhost:3000
```

---

## API Endpoints

### 🔹 Users

#### Create User

* Method: POST
* Endpoint: `/users`

```json
{
  "name": "Ahmad",
  "email": "ahmad@test.com"
}
```

---

#### Get All Users

* Method: GET
* Endpoint: `/users`

---

#### Get User By ID

* Method: GET
* Endpoint: `/users/:id`

---

#### Update User

* Method: PUT
* Endpoint: `/users/:id`

```json
{
  "name": "Ahmad Updated",
  "email": "ahmad2@test.com"
}
```

---

#### Delete User

* Method: DELETE
* Endpoint: `/users/:id`

---

### 🔹 Orders

#### Create Order

* Method: POST
* Endpoint: `/orders`

```json
{
  "total": 100,
  "status": "pending",
  "userId": 1
}
```

---

#### Get All Orders

* Method: GET
* Endpoint: `/orders`

---

#### Get Order By ID

* Method: GET
* Endpoint: `/orders/:id`

---

#### Update Order

* Method: PUT
* Endpoint: `/orders/:id`

```json
{
  "total": 200,
  "status": "completed",
  "userId": 1
}
```

---

#### Delete Order

* Method: DELETE
* Endpoint: `/orders/:id`

---

## Notes

* The project uses Sequelize migrations to manage the database.
* The relationship between Users and Orders is one-to-many.
* Routes and controllers are organized for clean structure.
* SQLite is used for simplicity.
