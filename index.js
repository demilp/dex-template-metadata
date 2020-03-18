function get() {
  let bindings = {};

  let elements = getAllElementsWithAttribute("dex-template");

  elements.forEach(p => {
    for (let i = 0; i < p.children.length; i++) {
      let c = p.children[i]
      bindings[c.id] = c.innerText;      
    }
  });
  return bindings;
}


function getAllElementsWithAttribute(attribute) {
  var matchingElements = [];
  var allElements = document.getElementsByTagName("*");
  for (var i = 0, n = allElements.length; i < n; i++) {
    if (allElements[i].getAttribute(attribute) !== null) {
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}
export default get;
