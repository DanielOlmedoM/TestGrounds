Server side APIs

06-01 (CURL):
CURL (Client URLs) is a command line tool for making HTTP requests and interacting with various network protocols (Used for testing apis).
curl https://api.github.com/users is a GET request. 
curl -X POST -d "username=johndoe&password=secret" https://api.example.com/login is a POST request. 

06-03 (Fetch):
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

06-05 (Different APIs):

var requestUrl = 'https://api.github.com/users';

// AJAX call requires a third party library, jQuery
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  console.log(response);
});

The Domain Name System (DNS) is a decentralized system that translates human-readable domain names into numerical IP addresses.

06-07 (Parse):
The JSON.parse() function is used to parse the JSON-formatted string (jsonString) into a JavaScript object (jsonObject).

06-09 (Dynamically generated elements):
DOM elements can be created dynamically with the data retrieved from a fetch request. 


06-11 (Network activity):
the "Network" tab provides detailed information about network activity associated with loading a web page. 

06-13 (Fetch status):
Informational (1xx):

100 Continue
101 Switching Protocols
Success (2xx):
200 OK
201 Created
204 No Content (successful request with no additional content)
Redirection (3xx):
301 Moved Permanently
302 Found (or temporary redirect)
304 Not Modified (cached content can be used)
Client Errors (4xx):
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
Server Errors (5xx):
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout

06-15 (Deconstruct parameters):
In JavaScript, when using the fetch function to make a network request, you can destructure the properties of the Request object. The Request object is typically used to configure the details of the HTTP request, such as the URL, method, headers, and body.

06-17 (Fetch options):
fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {}) Limits selection to 5 responses. 

06-19 (Document location):
In JavaScript, you can access the document location through the window.location object. This object provides information about the current URL, and you can access various properties of the location, such as:

href: The entire URL, including the protocol, host, path, and fragment identifier.
protocol: The protocol part of the URL (e.g., "http:" or "https:").
host: The host and port part of the URL (e.g., "example.com:8080").
hostname: The host part of the URL (e.g., "example.com").
port: The port number in the URL (e.g., "8080").
pathname: The path of the URL (e.g., "/path/page.html").
search: The query string part of the URL (e.g., "?key=value").
hash: The fragment identifier part of the URL (e.g., "#section").

06-21 (Review part one):
Stes: 1- Create HTML file, 2- Asign variables via JQuery or the DOM selectors, 3-create fetch function based on the inputs for the DOM created variables, 4-Use the response data to dynamically create new elements in the HTML. 

06-27 (Mini project: REST Countries API):
Create a page that accesess the REST countries API and renders the results dynamically on the DOM.
