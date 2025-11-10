import React from "https://esm.sh/react@19.2.0"
import ReactDOM from "https://esm.sh/react-dom@19.2.0/client"


const sandeep = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "sandee suthar")
    ])
}



const App = () => {
    return React.createElement( 
        "div",
        {},
        [
            React.createElement("h1", {}, "hellow world I m sandeep"
        ),
        React.createElement(sandeep),
        React.createElement(sandeep),
        React.createElement(sandeep),
        React.createElement(sandeep),
        ]
    )
}

const container = document.getElementById("root")
const root =  ReactDOM.createRoot(container)
root.render(React.createElement(App))