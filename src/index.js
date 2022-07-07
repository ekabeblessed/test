import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import HomeScreen from "./screens/HomeScreen";

//Just rendering the homescreen without passing it through <App/> becasue i dont make use of React Router DOM Here
ReactDOM.render(<HomeScreen />, document.querySelector("#root"));
