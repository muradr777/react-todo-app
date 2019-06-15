import React from "react";
import Todos from "./Components/Todos";

import { Provider } from "react-redux";
import store from "./store";

import "./App.sass";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="wrapper">
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
