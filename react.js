function render(reactElement, containerDOMElement) {
  const newElement = document.createElement(reactElement.type);
  newElement.innerText = reactElement.children;
  for (const key in reactElement.props) {
    newElement.setAttribute(key, reactElement.props[key]);
  }
  containerDOMElement.appendChild(newElement);
}

const reactElement = {
  type: "a",
  props: {
    id: "my-id",
    href: "https://wikipedia.org/",
  },
  children: "Read more on Wikipedia",
};

const containerDOMElement = document.querySelector("#root");

render(reactElement, containerDOMElement);
