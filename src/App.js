import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivetRouter from './components/PrivetRouter/PrivetRouter';
import Ragister from './components/Register/Ragister';
import Shiping from './components/Shiping/Shiping';
import Shop from './components/Shop/Shop';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <div>   
      <ContextProvider>        
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Shop></Shop>
          </Route>
          
          <Route path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>

          <PrivetRouter path="/inventory">
            <Inventory></Inventory>
          </PrivetRouter>

          <Route path='/login'>
            <Login> </Login>
          </Route>

          
          <PrivetRouter path='/shiping'>
            <Shiping></Shiping>
          </PrivetRouter>

          

          <Route path='/register'>
             <Ragister> </Ragister>
          </Route>

          <PrivetRouter path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivetRouter>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      </ContextProvider>
      </div>

  );
}

export default App;
