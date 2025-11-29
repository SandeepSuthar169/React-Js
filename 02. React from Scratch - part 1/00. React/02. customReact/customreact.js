
function customRender(reactELement, container){
    // const domElement = document.createElement(reactELement.type)
    // domElement.innerHTML = reactELement.Children
    // domElement.setAttribute('href', reactELement.props.href)
    // domElement.setAttribute('target', reactELement.props.target)
    
    // container.appendChild(domElement)

    //v2 -------------------------

    const domElement = document.createElement(reactELement.type)
    domElement.innerHTML = reactELement.Children
    for (const prop in reactELement.props) {
        if(prop === 'Children') continue;
        domElement.setAttribute(prop, reactELement.props[prop])
    }
    container.appendChild(domElement)

}


const reactELement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactELement, mainContainer)