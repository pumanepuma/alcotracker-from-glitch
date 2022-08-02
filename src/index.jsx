import React, {createContext, useSyncExternalStore} from "react";
import ReactDOM from "react-dom";
import App from "./app";
import TrackerStore from './store/TrackerStore'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
