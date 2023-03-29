# TODO-APP PROJECT

## Introduction
Welcome to my TodoApp project.This is a fullstack mini web application that is build React `frontend` and Rails `backend`.

## Project Requirements
- Rails API backend

- React client frontend

- Atleast 2 models

## RAILS API (`Backend Readme`)
This is where all the project endpoints are located.

## Getting Started
For the application to be functional an API had to be created hence setting up the backend.The api was created by running the following command from the terminal:

    rails new API --api --minimal --skip-javascript

Afterwards, navigate to the API directory to get started with building of the application.

## Deliverables

## Models
The backend of this project requires atleast 2 models.

1.Todo model

2.User model

To create the Todo model I had to run the following command in the console:

    rails g model Todo title description:text status:integer priority:integer belongs_to --no-test-framework

To create the User model I had to run the following command:

    rails g User username email password_digest

After creating the model ensure to run migration using the command:

    rails db:migrate

## Active Record Associations
The Todo model belongs to a user

The User model has many todos

## Validations
Add validations to the User model:

- must have a `username` which must be present, unique and have a minimu length of 5 and a maximum of 8

- must have an `email` which must present and unique.

Add validations to the Todo model:

- must have a `title` which must be present and of length of a minimum of 5 and a maximum of 20

- must have a `description` which must be present and of length of minimum 20

## ROUTES

The project has routes that will be able to show all users,register a user,login a user and logout a user from the User controller and routes that will create a todo, show all todos, update a todo and delete a todo from the Todo controller.

## Users Routes

GET `/users`

Displays all users with their id, username, email and passwords.

Returns a message of success and an array of all users:


POST `/users/registers`

Returns a success message when the user is registered properly:

    {
        "message": 'Registration was succesfully'
    }

Throws an error message if registration was not successfully:

    {
        "message": 'Something went wrong during registration'
    }

Registers a user.

POST `/users/login`

This routes login a user to the database.

Returns a success message when the user is logged in properly:

    "message": 'Login was successful'

Throws an error message if the login was not successfully:

    "message": 'Invalid username/email or password'


GET `/users/login/check`

Checks whether a user is logged in.

Returns a success message and status of ok.

DELETE `/users/logout`

Deletes a user that was logged in.

Returns a message if the user is deleted successfully:

    "message": 'Logout successful'

## Todos Routes

GET `/todos`

Displays a list of all todos.

POST `/todos`

Creates a new todo item

Returns a message if the todo is not created successfully.

    {
        "message": 'failed'
    }

PUT `/todos/:id`

Updates a todo by their id

Returns a message of the following message if the todo is updated successfully:

    {
        "message": "updated todo successfully"
    }

DELETE `/todos/:id`

Deletes a created or existing todo.

Returns a message if the todo is deleted successfully:

    {
        "message": 'success'
        "data": [
            "info" : "deleted todo successfully"
        ]
    }

## Application Routes

GET `/verify`

Verifies that a user is authenticated.

## Conclusion
This code better expresses our function's intent when it comes to working with
the response. Our server will always send back JSON data, so we always want to
parse the response; and after we've parsed the response, we can decide what to
do with that data based on whether or not the response was `ok`.

## REACT CLIENT(`Frontend Readme`)

The frontend of this project is where all the user visuality is worked upon.

## Getting started
For the application to be visualized and functional a client directory is set up in the Rails project.This is done by navigating into the current project directory and running the following command:

    npx create-react-app client

Afterwards, navigate into the client folder with the following command:

    cd client/

Run the following command to install the required dependancies for the React app.

    npm install

To test whether the app is functional run:

    npm start

## Deliverables
The React app must have atleast six components and of which the Task component,TaskForm component,App component and TaskList component must be available.

## Fetching the API
In one of the component is where a fetch request will be made from the backend to link the two project as one.As the backend run on a localhost of port 3000, the fetch request will be as follows:

    const handleSubmit = e => {
        e.preventDefault();
                fetch('http://127.0.0.1:3000/todo_app', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                
            })
        })
    }

## Conclusion
After the project is deployed there will be no need to run npm start as there will be a live link that will open up the frontend of the project.

## Author

Changawa Issa.
=======
>>>>>>> fe00782ed0edfe45a1fab92f96c6d2c09f8dd662
