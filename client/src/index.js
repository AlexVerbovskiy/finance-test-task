import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import {store} from "./store";
import {Provider} from "react-redux";

/*доробити можливість переходу на ворму редагування в компоненті GuideCard, сторінки AllGuides, через mobX в якому буде інфа про юзера */


const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<Provider store={store}><App/></Provider>);
}