const heading = React.createElement("h1",{id:"head",class:"heading"},"hello from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));        


const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"children"},[React.createElement("h1",{},"hello"),React.createElement("h1",{},"hello")]))
root.render(parent);