# Journaling App

This project is a journaling app designed with mental health in mind.It app allows users to sign up, log in, and create personal journal entries, providing a digital space for reflection and emotional release. The backend is powered by Node.js and Express, while the frontend is a React Native mobile app built using Expo, ensuring a seamless experience across devices. Whether it's daily reflections or processing difficult emotions, this app is here to support users on their mental health journey.

## Documentation

### Backend Service

#### Setup and Run

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-name>

### Install the backend dependencies:

npm install


### Set up the environment variables:

Create a .env file in the root of the project and add your environment variables. Example:

JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=4096
DB_NAME=journal_app


### Run the server:

npm run server

# Mobile App
## Setup and Run

### Install Expo CLI:

If you haven't installed Expo CLI yet, run:

### Navigate to the mobile app directory (if different from the root) and install dependencies:

cd mobile-app
npm install

### Run the app:

npx expo start

This will start the Expo development server. You can scan the QR code using the Expo Go app on your mobile device to run the app.


# API Documentation
## Endpoints
### Authentication
### Signup

POST /api/auth/signup
Description: Creates a new user account.

Request body:

{
  "username": "your_username",
  "password": "your_password"
}

Response:

{
  "message": "User created successfully",
  "token": "jwt_token"
}

### Log in

POST /api/auth/login

Description: Authenticates a user and returns a JWT token.

Request Body:

{
  "username": "your_username",
  "password": "your_password"
}


Response:

{
  "message": "Login successful",
  "token": "jwt_token"
}

### Journal Entries

Get Journal Entries

GET /api/user/entries

Description: Retrieves all journal entries for the authenticated user.

Headers:

Authorization: Bearer jwt_token

Response:

{
  "entries": [
    {
      "id": 1,
      "user_id": 1,
      "title": "Entry Title",
      "content": "Entry content",
      "category": "Category",
      "date": "2023-01-01"
    },
    ...
  ]
}

Add Journal Entry

POST /api/user/add

Description: Adds a new journal entry for the authenticated user.

Headers:

Authorization: Bearer jwt_token

Request body:

{
  "title": "Entry Title",
  "content": "Entry content",
  "category": "Category"
}


Response:

{
  "message": "Journal entry added successfully",
  "entryId": 1
}

## Note
This project is still under development, and additional features and improvements will be added later.

csharp

