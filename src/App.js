import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/add">
            <AddProduct />
          </Route>
          <Route exact path="/edit/:id">
            <EditProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
