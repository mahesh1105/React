const mainContainer = document.querySelector('#root')

// Note: Bundler will basically help in parsing the element then tree will be generated
// that makes it easier for JavaScript to understand the HTML Syntax
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

// customRender function to render the info stored in the object and inject it into HTML
// function customRender(reactElement, mainContainer) {
//     let domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;

//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target', reactElement.props.target);

//     mainContainer.appendChild(domElement)
// }

// customRender function to render the info stored in object and inject it into HTML - modular
function customRender(reactElement, mainContainer) {
    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement)
}

customRender(reactElement, mainContainer);