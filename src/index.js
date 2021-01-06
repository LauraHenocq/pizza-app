import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
//import de la feuille de style de Ant Design
import 'antd/dist/antd.css';
import './index.css';
import { Provider } from "react-redux";
import rootReducer from './reducers';
import App from './App';
import NotFound from './components/NotFound';
import New from './components/New';
import Order from './components/Order';
import reportWebVitals from './reportWebVitals';

// Import des composants nécessaires à la mise en place de notre système de routes/navigation de notre application
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

// Création du store via Redux
const store = createStore (
  rootReducer, 
  // Ligne suivante indispensable pour voir apparaître notre Store dans l'extension Redux DevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const Root = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/new" component={New} />
        <Route path="/order/:id" component={Order}/>
        {/* <Route path="/commandes" component={Orders}/> 
        <Route path="/paiement" component={Payment}/> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
