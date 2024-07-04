This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/alieturk/client.git
cd client
npm install
# or
yarn install
```

#### Create a .env.local file in the root directory of your project and add your Pixabay API key:
NEXT_PUBLIC_PIXABAY_CLIENT_ID=your_pixabay_api_key

Then, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

### Running the Backend Server
The backend server is necessary to proxy requests to the Pixabay API. Run it using:
node server.js

Make sure you have your .env.local configured with your Pixabay API key.

### Usage 
1. Open the app in your browser at http://localhost:3000.
2. Enter a search query in the input field and click the "Search" button.
3. The application will fetch images from Pixabay based on the search query and display them.
4. Click on an image to view it on the Pixabay website.

### Deployment 
I have used Heroku deploy the application on a live server. 

### Built with 
* Node.js - JavaScript runtime
* Express - Web framework for Node.js
* React - JavaScript library for building user interfaces
* Axios - Promise-based HTTP client for the browser and Node.js
* Pixabay API - Free API for searching images


### Learn More
To learn more about the technologies used in this project, take a look at the following resources:

* Next.js Documentation
* React Documentation 
* Express Documentation

