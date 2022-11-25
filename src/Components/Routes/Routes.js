import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/MainLayout/Main'
import AddProduct from '../Pages/Seller/AddProduct/AddProduct'
import AllBuyers from '../Pages/Admin/AllSellerAndBuyer/AllBuyers'
import AllSellers from '../Pages/Admin/AllSellerAndBuyer/AllSellers'
import Blog from '../Pages/Blog/Blog'
import CategoryPage from '../Pages/CategoryPage/CategoryPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import MyOrder from '../Pages/MyOrder/MyOrder'
import SignUp from '../Pages/SignUp/SignUp'
import MyProducts from '../Pages/Seller/MyProducts/MyProducts'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryPage></CategoryPage>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myorders',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
])


export default router