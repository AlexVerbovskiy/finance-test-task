import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";


/*доробити можливість переходу на ворму редагування в компоненті GuideCard, сторінки AllGuides, через mobX в якому буде інфа про юзера */


const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App/>);
}