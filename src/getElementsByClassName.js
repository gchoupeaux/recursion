// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//https://stackoverflow.com/questions/32614422/reimplementing-getelementsbyclassname-using-recursion-javascript
var getElementsByClassName = function(className, node){
  //You should use document.body, element.childNodes, and element.classList
  // The empty results array, which gets created whenever the function is
  // called.
  var results = [];

  // Default the node to the document's body if it isn't set. This way, we can
  // call the function recursively with child elements, but never have to
  // worry about it the first time around.
  node = node || document.body;

  // If the node contains the class list in question, let's push it into the
  // results array.
  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }

  // Now, let's fetch the child nodes of the current node.
  var children = node.childNodes;

  // If child nodes exist, then we proceed here.
  if (children) {
    // Let's now loop over all child nodes of the current node in question. This
    // way, we'll be able to perform checks on each child node.
    for (var i = 0; i < children.length; i++) {
      // Fetch the i child node.
      var child = children[i];

      // At this point, we want to pass the child node back into the function,
      // implementing recursion. The same checks above will occur, and if the
      // node has the class name, it will be added to the results array from
      // that function call.
      //
      // This returns an array, and we need to merge it with the current set
      // of results, so we concat it.
      //
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
      results = results.concat(getElementsByClassName(className, child));
    }
  }

  // We then return the combined results array from all the recursive function
  // calls!
  return results;
};
