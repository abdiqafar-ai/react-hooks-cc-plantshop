# Phase 2 Code Challenge: Plantsy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-code-challenge-plantshop/plantsy_demo.gif)

## Instructions

Welcome to Plantsy, a web app for managing a plant store's inventory. In this challenge, you're tasked with implementing various features on the admin side of the plant store. You'll be working with a backend API and managing stateful logic using React (or your preferred state management system).

The frontend components and CSS are already provided. Your job is to add the necessary functionality to handle user interactions, API requests, and dynamic state updates.

## Setup

To get started with the project, follow these steps:

Install dependencies:
npm install
npm run server
This will run the backend on port 6001. Ensure it's working before proceeding by opening http://localhost:6001/plants in your browser.

Start the frontend app:
npm start
This will launch the React app in your browser.

## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Core Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.

### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

You'll have to add additional elements for these features. Feel free to style
them however you see fit!

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user:

1. I can update the price of a plant and still see the updated price after
   refreshing the page.
2. I can delete a plant and it is still gone when I refresh the page.

### Endpoints for Advanced Deliverables

#### PATCH /plants/:id

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 16.99
}
```

#### DELETE /plants/:id

Example Response:

```json
{}

When the app starts:
The app should make a GET request to /plants and render the list of plants.
Each plant should display its name, image, and price.
You should allow marking a plant as sold out, which could be toggled by clicking a "sold out" button.
The user should be able to search for plants by name, which filters the list of plants displayed.
Adding a Plant:
A form should be provided for adding a new plant. The form should take the plant’s name, image URL, and price.
When the user submits the form, a POST request should be made to the /plants endpoint with the plant data.
The newly added plant should be added to the list dynamically without reloading the page.
Marking a Plant as Sold Out:
There should be a button next to each plant to toggle its "sold out" status.
When clicked, the button should toggle between "Sold Out" and "Available", and the plant should be visually updated (e.g., grayed out or crossed out).
The sold-out status should be stored in the backend.
Search Functionality:
A search bar should be provided to allow users to filter plants by name.
The list of plants should be dynamically updated as the user types.
You should handle edge cases like empty searches, no results found, etc.

