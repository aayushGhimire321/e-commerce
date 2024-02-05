import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import AddCategory from '../views/Category/AddCategory';
import CategoryView from '../views/Category/Category';
import ProductView from '../views/Product/Product';
import AdminPanel from '../views/Admin';
import AddProduct from '../views/Product/AddProduct';
import EditCategory from '../views/Category/EditCategory';
import EditProduct from '../views/Product/EditProduct';
import ShowDetails from '../views/Product/ShowDetails';
import WishList from '../views/Product/WishList';
import ListProducts from '../views/Category/ListProducts';
import SignUpPage from '../views/Signup';
import SignInPage from '../views/Signin';
import ShoppingCart from '../views/Cart';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/show/:id" component={ListProducts} />
        <Route path="/admin/category/add" component={AddCategory} />
        <Route path="/admin/category" component={CategoryView} />
        <Route path="/admin/category/:id" component={EditCategory} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/admin/product" component={ProductView} />
        <Route path="/admin/product/new" component={AddProduct} />
        <Route path="/admin/product/:id" component={EditProduct} />
        <Route path="/product/show/:id" component={ShowDetails} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
