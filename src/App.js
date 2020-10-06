import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import ROUTES from "./routes/Route";
import RenderRoutes from "./routes/RenderRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assests/css/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <RenderRoutes routes={ROUTES} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
