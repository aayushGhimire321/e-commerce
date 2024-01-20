import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AddCategory from '../views/Category/AddCategory'
import CategoryView from '../views/Category/Category'
import ProductView from '../views/Product/Product'
import AdminPanel from "../views/Admin";
import AddProduct from "../views/Product/AddProduct";
import EditCategory from "../views/Category/EditCategory";
import EditProduct from "../views/Product/EditProduct";
import ShowDetails from "../views/Product/ShowDetails";
import WishList from "../views/Product/WishList";
import ListProducts from "../views/Category/ListProducts";
import SignUpPage from "../views/Signup";
import SignInPage from '../views/Signin';
import ShoppingCart from '../views/Cart';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    // category detail page
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: CategoryView
  },
    // category edit
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
    // admin home page
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPanel
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: ProductView
  },
    // add product
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },
  // edit product
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },

    // show details of product
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },

  // sign up and signin

  {
    path: '/signup',
    name: 'Signup',
    component: SignUpPage
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignInPage
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;