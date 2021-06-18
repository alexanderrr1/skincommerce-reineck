import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

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
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
