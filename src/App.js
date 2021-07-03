import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContext from './context/CartContext';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';

function App() {
  return (

    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <ItemListContainer greetings="Productos"/>
        </Route>
        <Route exact path="/category/:category">
          <ItemListContainer greetings="Productos"/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <CartContext.Provider>
            <Cart />
          </CartContext.Provider>
        </Route>
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
