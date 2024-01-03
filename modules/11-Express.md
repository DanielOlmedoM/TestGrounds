Express

Express, is a minimal and flexible web application framework for Node.js. It is designed to make it easier to build web applications and APIs, widely used for building server-side applications.
Key features:
1- Rotuing: Express provides a simple and expressive way to define routes for handling HTTP requests.
2- Middleware: Middleware can be added to the request-response cycle to perform actions before or after the actual route handling.
3- Template engines:  While Express itself does not include a template engine, it is often used in conjunction with template engines like Pug, EJS, or Handlebars to dynamically generate HTML on the server.
4- Static file serving: Express makes it easy to serve static files (e.g., images, stylesheets, scripts) through built-in middleware, simplifying the process of delivering static content to clients.
5- Rquest and response handling: Express simplifies the process of handling HTTP requests and responses, providing methods for setting headers, sending responses, parsing request bodies, and more.
6- RESTful APIs: Express is commonly used to build RESTful APIs, allowing developers to create robust and scalable server-side applications for handling data and communication between clients and servers.
7- Middleware ecosystem:  Express has a rich ecosystem of middleware modules that can be easily integrated to add additional functionality to your application, such as authentication, logging, and error handling.

Routes: routes allow us to send and receive data depending on which route and HTTP method we use.

RESTful API: REST, or representational state transfer, is an architecture for creating a web service like an API.

HTTP methods: 
1- POST: submit data to the specified resource, often causing a change in the server.
2- GET: retrieves a resource form the server.
3- DELETE: deletes a specified resource. 
4- PUT: replaces a specified resource with a payload. 

Eg: 
First argument: path
second argument: callback (req,res)=>{}

app.get('/', (req, res) => 
res.sendFile('index.html'));

app.get('/api/reviews, (req,res) =>
res.json(reviewData));

app.post('/ api/review, (req,res) => 
    {
        const newReview = req.body
        writeToFile(destination, newReview)
        res.json(`${req.method} recieved`)   
    }
);

Client-side requests: use the Fetch API to maque requests to the express server.
The Fetch API provides a more powerful and flexible way to work with HTTP requests compared to older alternatives like XMLHttpRequest.
Fetch GET request:

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the data from the successful response
    console.log(data);
  })
  .catch(error => {
    // Handle errors during the fetch operation
    console.error('Fetch error:', error);
  });

The Fetch API supports various HTTP methods (GET, POST, PUT, DELETE, etc.) and allows customization of headers, request and response types, and more.

Fetch POST request: 

fetch('https://api.example.com/post-data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers as needed
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
    // Include any data you want to send in the request body
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

Headers: HTTP headers are components of an HTTP request or response that provide additional information about the request or response.
Like authorization, date and content type, etc. 

Resolving requests: 
Request myst be concluded to prevent the client application from hanging indefinitely. 
Methods attatched to the response object allow us to conclude a request-response cycle. 

app.put('api/pets/:pet_id, (req,res) => {
    //Logic to update pet
    res.json('Pet updated')
});