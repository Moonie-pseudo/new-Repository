<!-- question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  -->
Ans: 
The difference between them are as follows:

getelementbyid- it returns the specific id. Only one element can have a given ID. Returns null if not found

getelementsbyclass- it directly returns the class. can return multiple items since many element can have the same class.

queryselector- Returns the first matching element. can contain (#IDs, .classes, tags)

queryselectorall- Returns all matching elements.

in conclusion, getelement is comparatively faster since it's more specific but queryselector first has to detect whether its an id, class or tag.


<!-- question 2:How do you create and insert a new element into the DOM? -->
Ans:
 first create a newdiv using document.createElement-
 const newDiv= document.createElement('div');

 add content inside the new div
 newDiv.innerText = 'hi';

 insert into DOM
 document.body.appendchild(newDiv);

 <!-- question 3:What is Event Bubbling and how does it work? -->
 ans:
 Event bubbling is the process in a DOM where an event occurs at a child div or element and then bubbles upwards through its parent elements to the room of the document.

 <!-- question 4:What is Event Delegation in JavaScript? Why is it useful? -->
ans:
Event Delegation is a pattern based upon the concept of Event Bubbling. It turns multiple steps into one step. Instead of attaching event listeners to multiple child elements, you attach a single listener to a common ancestor and check the target element inside the handler.
It's useful beacause-
1.Improves web application performance by reducing the number of event listeners and hence saving memory.
2.simplifies code by centralizing event handling.
3.handles dynamic content by automatically managing events for elements added or removed from the DOM.

<!-- question-5:What is the difference between preventDefault() and stopPropagation() methods? -->
ans:
preventDefault()-	Stops the default browser behavior of an element. Example-auto refreshing and hence clearing the console.
stopPropagation()-	Stops the event from bubbling (or capturing) up/down the DOM. Example: prevent parent click handler from running.