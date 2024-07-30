# Airbnb  Application



This project is an Airbnb-like application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to register, log in, create, view, and manage property listings, upload photos, and make bookings.



## Table of Contents



- [Features](#features)

- [Technologies Used](#technologies-used)

- [Installation](#installation)

- [Environment Variables](#environment-variables)

- [Usage](#usage)

- [API Endpoints](#api-endpoints)

- [Folder Structure](#folder-structure)





## Features



- User authentication (registration, login, and logout) with JWT tokens

- Create, update, and delete property listings

- Upload property photos via file upload or URL

- View all property listings

- Make bookings for properties

- View user-specific bookings and properties



## Technologies Used



- **Frontend**: React, Axios, React Router

- **Backend**: Node.js, Express.js, MongoDB, Mongoose

- **Authentication**: JWT (JSON Web Tokens), bcrypt for password hashing

- **File Uploads**: Multer, image-downloader

- **Environment Variables**: dotenv



## Installation



1. **Clone the repository**:

   ```bash

   git clonehttps://github.com/206724/Cap-Stone-one.git

   cd front-end-clone

   ```



2. **Install dependencies** for both the client and server:

   ```bash

   # In the root directory (for server)

   npm install



   # In the client directory (for client)

   cd front-End

   npm install

   ```



3. **Start the development server**:

   ```bash

   # In the root directory (for server)

   nodemon index.js



   # In the client directory (for client)

   cd front-End

   npm run dev

   ```



## Environment Variables



Create a `.env` file in the root directory and add the following variables:



```env

MONGO_URL=mongodb_connection_string

JWT_SECRET=_jwt_secret

```



## Usage



### Register a User



- Access the registration page at `/register`

- Fill in the registration form and submit



### Log In



- Access the login page at `/login`

- Fill in your credentials and submit



### Create a Listing



- After logging in, navigate to the "Create Listing" page

- Fill in the form with property details and submit



### View Listings



- Navigate to the My accommodations  to view all available listings



### Book a Property



- Select a property from the listings

- Fill in the booking details and submit



## API Endpoints



### Authentication



- **POST** `/register`: Register a new user

- **POST** `/login`: Log in a user

- **POST** `/logout`: Log out a user

- **GET** `/profile`: Get the logged-in user's profile



### Properties



- **POST** `/API/user-places`: Create a new property listing

- **PUT** `/API/places`: Update an existing property listing

- **GET** `/API/user-places`: Get all properties of the logged-in user

- **GET** `/API/places/:id`: Get a specific property by ID

- **GET** `/API/places`: Get all properties



### Bookings



- **POST** `/bookings`: Create a new booking

- **GET** `/bookings`: Get all bookings of the logged-in user



### File Uploads



- **POST** `/upload-by-link`: Upload a photo by URL

- **POST** `/upload`: Upload photos via file upload



## Folder Structure



```

my-app/

├── models/

│   ├── User.js

│   ├── Place.js

│   └── Booking.js

├── index.js

├── uploads/

├── front-End/

│   ├── public/

│   └── src/

├── server.js

├── .env

└── package.json

```



## Contributing



Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.




