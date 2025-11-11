import React from "https://esm.sh/react@19.2.0"
import ReactDOM from "https://esm.sh/react-dom@19.2.0/client"


const sandeep = (props) => {

    console.log(props);
    

    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.lastName)
    ]);
};



const App = () => {
    return React.createElement( 
        "div",
        {},
        [
            React.createElement("h1", {}, "hellow world I m sandeep"
        ),
        React.createElement(sandeep, {
            name: "sandeep",
            lastName: "suthar"
        }),
        React.createElement(sandeep, {
            name: "karan",
            lastName: "kumar"
        }),
        React.createElement(sandeep, {
            name: "hitesh",
            lastName: "suthar"
        }),
        React.createElement(sandeep, {
            name: "rahul",
            lastName: "sharma"
        }),
        ]
    )
}

const container = document.getElementById("root")
const root =  ReactDOM.createRoot(container)
root.render(React.createElement(App))