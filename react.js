function render(reactElement, containerDOMElement) {
  /* Your code here! */
}

const reactElement = {
  type: "a",
  props: {
    href: "https://wikipedia.org/",
  },
  children: "Read more on Wikipedia",
};

const containerDOMElement = document.querySelector("#root");

render(reactElement, containerDOMElement);
