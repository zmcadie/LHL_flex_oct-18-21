# CRUD with Express

## Overview
* CRUD & HTTP
* Creating an Express app
* Rendering templates with EJS
* Making HTTP requests with HTML

## CRUD & HTTP
CRUD is an acronym that represents the different actions we can perform in our web apps. These actions map to HTTP methods and define how we can interact with our resources.

### CRUD
* Create — Add new resources
* Read   — View existing resources
* Update — Edit existing resources
* Delete — Remove existing resources

| CRUD   | HTTP   |
|--------|--------|
| Create | POST   |
| Read   | GET    |
| Update | PUT    |
| Delete | DELETE |

## Creating an Express app
Express is a minimal Node.js framework for web apps. Express allows us to easily implement middleware and routing functions in our server.

1. Init npm
1. install express
1. create server.js

```bash
npm init -y
npm install express
```

```js
// server.js
const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

### Listening for requests
Express lets us set up *listeners* for incoming HTTP requests to our app using methods that correspond to the HTTP methods. So `app.get` will only trigger for `GET` requests to that route, `app.post` for `POST` requests etc.

We pass the path to listen for as the 1st argument and a callback as the 2nd argument.

```js
// listen for GET requests to /profile
app.get('/profile', (req, res) => {
  // do something here
})
```

Our callbacks recieve a `request` object and a `response` object as arguments. Using these we can extract information about the incoming request and send a response back to the user.

#### Request params
Express also lets us listen for dynamic routes where one part of the route might change to indicate which resource it is relevant to.

```js
// define a route with a param by adding : in front of the param name
// express will then store that section of the request in the req.params object
app.get('users/:id', (req, res) => {
  // retrieve request params using the req.params object
  const userId = req.params.id
  // do something here
})
```

### Middleware
Middleware is code that runs *after* our server recieves an HTTP request and *before* we process that request to send a response.

#### Morgan
Morgan is middleware for Node.js apps that logs incoming HTTP requests. This lets us easily monitor which actions our app is performing.

```bash
npm install morgan
```

```js
// server.js
const morgan = require('morgan')

app.use(morgan('dev'))
```

### Nodemon
Nodemon is a tool that helps us develop Node.js apps by automatically restarting the application when files change.

```bash
npm install --save-dev nodemon
```

To use nodemon replace `node` with `nodemon` when running your scripts. Do this in the command line if you've installed nodemon globally or in your script in `package.json` if you installed nodemon with `--save-dev`.

```bash
nodemon server.js
```

## Rendering templates with EJS
EJS (Embedded JavaScript) is a simple templating language that lets us write HTML with plain JavaScript.

```bash
npm install ejs
```

```js
// server.js
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'})
})
```

```
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

## Making HTTP requests with HTML
There are two basic HTML elements that let us make HTTP requests without writing any JavaScript: forms and anchors.

### <form>
HTML forms let us send requests to our server based on user input. `<form>` elements make HTTP requests based on the `action` and `method` attributes.

* action — the URL for our request (eg. `/resource/create`)
* method — the HTTP method to use (only GET and POST)

```html
<!-- will send a post request to /signup with the formdata in the post body -->
<!-- unless the post route redirects the user a form will also redirect the user to the same URL -->
<form action="/signup" method="post">
  <label for="name">Enter your name: </label>
  <input type="text" name="name" id="name" required>
  <label for="email">Enter your email: </label>
  <input type="email" name="email" id="email" required>
  <button type="submit">Submit</button>
</form>
```

### <a>
HTML anchors let us create hyperlinks that will redirect the user to the specified URL based on the `href` attribute.

Because anchors redirect users to a new URL they can only trigger GET requests.

```html
<!-- will redirect the user to /login -->
<!-- this will trigger a GET request to the same route -->
<a href="/login">Log In</a>
```