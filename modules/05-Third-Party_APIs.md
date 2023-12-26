Third party APIs
Third Party: An external entity that provides an API that the software application can use to access certain functionalities or data.

DOM:
Document: Refers to the entire webpage or document that you see in your browser.
Object: In programming, an object is a collection of properties and methods. In the case of the DOM, these objects represent the different elements on a webpage.
Model: Think of it as a way to represent the structure of the document. The DOM is a tree-like structure where each element on the webpage is a node in the tree.
So, when you interact with a webpage using JavaScript, you are essentially using the DOM to access and manipulate the elements on the page. 


05-01 (JQuery elements):
Selectors: CSS selectors
Methods: Operations for the DOM elements
Chaining: Chains methods for more consisce code
Events: Trigers for functions
Effects and animation: Provides methods for animation
AJAX: .ajax() is used to retreive data from the server.

05-03 (Click events):
// When a button is clicked, change the text of a paragraph
$("button").click(function() {
    $("p").text("Button was clicked!");
});

05-05 (Form elements):
1-Form Tag: <form>
2-Input elements: used to gather info.
3-Button elements: Used to trigger events or sumbition.

Form submition JQuery:
1-Preventing Default Form Submission: event.preventDefault();
2-Getting form data: Use JQUery elements to access data.
3-AJAX Form Submission: SUbmit data without reloading page.

05-07 (DOM traversal):
The DOM represents the structure of a document as a tree-like structure, where each HTML element is a node in the tree. 
1-Parent/children:
.parent(): Gets the direct parent of an element.
.children(): Gets all direct children of an element.
2-Siblings:
.siblings(): Gets all siblings of an element.
3-Next and previous:
.next(): Gets the next sibling of an element.
.prev(): Gets the previous sibling of an element.
4-Filtering:
.filter(): Reduces the set of matched elements based on a condition.
5-Find:
.find(): Gets the descendants of each element in the current set of matched elements.

05-09 (Event delgation):
Instead of attaching an event handler to each individual element, you attach a single event handler to a common ancestor of those elements. 
Benefits:
Efficiency: Fewer event listeners improve performance, especially for large numbers of elements.
Dynamic Content: It works well with dynamically added or removed elements without the need to reattach handlers.

05-11 (Bootstrap components):
Provides a collection of pre-designed and styled components to help developers create responsive and visually appealing web pages quickly.

05-13 (Bootstrap layout):
Columns and grid and stuff.

05-15 (Bootstrap utilities):
Bootstrap utilities are a set of helper classes provided by the Bootstrap framework that allow developers to apply common styles or behaviors to elements without the need for custom CSS. 

05-17 (Bootstrap extend):
Bootstrap often includes JavaScript plugins for enhanced functionality, such as carousels, modals, tooltips, etc. You might be referring to extending these functionalities through custom JavaScript code or additional libraries.

05-19 (Google fonts):
Font library

05-21 (JQuery UI widgets):
jQuery UI provides a collection of ready-to-use UI components that can enhance the interactivity and visual appeal of web applications.
Accordion,Autocomplete, Button, Datepicker, Dialog, Menu, Progressbar, Slider, Sortable, Tabs, Tooltip, Resizable, Selectable, Draggable, Droppable, Spinner.

05-23(JQuery UI interactions):
Developers can easily apply these interactions to HTML elements using jQuery UI, enhancing the overall user experience of web applications.
jQuery UI has been widely used in the past, the web development landscape has evolved.

05-25 (Moment format):
// Use Moment.js

05-28 (Mini project): Project Tracker
Create a project tracker application using Bootstrap, jQuery, jQueryUI, Moment, and Google Fonts.