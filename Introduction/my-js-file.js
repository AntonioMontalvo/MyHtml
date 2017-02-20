var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}

// In this example with JavaScript (although other languages work for this as well), we use a programming interface called the DOM or Document Object Model. The DOM is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document as a tree. The DOM defines methods that allow access to the tree, so that they can change the document structure, style and content. 

	// Inside the DOM, the Document interface provides many methods; Document.createElement() creates an element with the given tag name. 

	// document.querySelector, returns the first element  within the document, in document orther that matches the specify selector.

	// document.body returns the body element of the current document.

	// Node is an interface from which a number of otheer interfaces inherit. One of its methods is .appendChild() which adds the specified childNode argument as the last child to the current node.

	// One of the properties of Node is .textContent , which represents the text content of a node and its descendants.

	// One of the methods for the DOM is .stopPropagation()  It's purpose is this. The html.onclick generates an event. listItem and listContent are declared. So an li element and a prompt message is issued. To prevent the document from generating another li element when an existing li is clicked, we use stoprPropagation(). No when we click our listItem the function listItem.onclick prompt as message and assigns the input to listContent in the click li element. 