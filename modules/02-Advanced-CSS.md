Advanced CSS

02-01 (Media query screen):
When using 'max-width' as the breakpoint, you must go from widest to narrowest to avoid conflict. 
@media screen and (max-width: value)
Tablets: max-width: 992px
Large smartphones: max-width: 768px
Small smartphones: max-width: 576px

02-03 (Flexbox layout):
Display = flex: Turns element into Flexbox.
Flex-wrap = wrap: Forces element into new line if it doesn't fit. 
Justify cotent: Defines how to distribute the empty space bewtween the child elements. 
Flex: 1 0 200px: A flex-basis of 200px sets the starting width, a flwx-grow valye of 1 allows the elements to evenly grow to fill the remaining space.
Flex: 2 1 200px: With a flex-grow value of 2, this elemnt grows teice as wide as others, the second value "flex-shrink", defines how the element will shrinkif it can't fit. 

02-05 (Responsive design):
Flex-direction: Uses direction to stack the nav bar vertically.

02-07 (Flexbox placement):
Justify-content: Defines position determined by flex-direction.
Align-items: Defines position along opposite axis.

02-09 (Box styling):
Box-sizing: Border box
transform: Modifies the element, can use rotate, scale, skew, etc. 

02-11 (CSS resets):
html-height: 100%: Gives the body element a parent height to compare against. 
list-style: none: Removes default bullet points from list. 

02-13 (Typography):
Font properties: font-family, font-weight, font-style.
Eg.:  .three {font-family: 'Menlo', 'Lucida Console', monospace; font-weight: 100; font-style: normal;}

02-15 (Pseudo-classes): A CSS pseudo-class is a keyword that is used to define a special state or condition of an HTML element. Pseudo-classes are used in conjunction with selectors to style elements based on their state or position in the document.
Examples: :hover, :active, :focus, :nth-child, :first-child.

02-19 (Form styles):
Tags: <form>,<label>,<input> *Input has multiples types and placeholder text., <select>,<option> *Multiple choice., <textarea>,<button>

02-20 (Wireframing):
Prebuilding the html structure for testing psobile arrangements of elements. 

02-23 (CSS selectors):
li:nth-child(even): selects every even item in the list. 
Adjacent sibiling combinator "+".
Eg.: ul + p: Selects all <p> elements that come immediately after a <ul> element.
Child combinator ">".
Eg.: Selects every element that is a derect descendant of a selected <div> type.
Wildcard selector "*"

02-25 (CSS variables):
Create custom CSS variables (also called custom properties) and apply them to the root of the page, making them accessible to all other CSS.
Declare variable with "--" syntax.
Eg.: --dark: #13293d;
To use the declared variable use "var()", Ie. color: Var(--dark).

02-28 (mini-project):
Page with a collection of snippets.