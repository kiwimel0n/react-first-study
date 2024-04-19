import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../untitled1/src/index.css';
import App from '../../untitled/src/App';
import reportWebVitals from '../../untitled/src/reportWebVitals';

import Library from "./jsx/Library";
import Clock from "./rendering elements/Clock";
import CommentList from "./components and props/CommentList";
import NotificationList from "./state and lifecycle/NotificationList";
import Accommodate from "./hook/Accommodate";
import ConfirmButton from "./event/ConfirmButton";
import ConfirmButton2 from "./event/ConfirmButton2";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval( () => {
  root.render(
      <React.StrictMode>
        <ConfirmButton2 />
      </React.StrictMode>
  );
}, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
