import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory, History } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
 
export const history : History = createBrowserHistory({ window });
 
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <HistoryRouter history={history}>
        <App />
    </HistoryRouter>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
