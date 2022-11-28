import { createBrowserRouter } from 'react-router-dom'
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
import ReportedItem from '../Pages/Admin/ReportedItem/ReportedItem'
import Dashboard from '../Pages/Dashboard/Dashboard'
import DashboardLayout from '../Layouts/DashBoardLayout/DashboardLayout'
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute'
import PrivateAdmin from '../Pages/PrivateRoute/PrivateAdmin'
import PrivateBuyer from '../Pages/PrivateRoute/PrivateBuyer'
import PrivateSeller from '../Pages/PrivateRoute/PrivateSeller'

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
                element: <PrivateRoute><CategoryPage></CategoryPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://purana-bazar-server-arkoroybadhon.vercel.app/category/${params.id}`)
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
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element: <PrivateSeller><AddProduct></AddProduct></PrivateSeller>
            },
            {
                path: '/dashboard/myorders',
                element: <PrivateBuyer><MyOrder></MyOrder></PrivateBuyer>
            },
            {
                path: '/dashboard/allsellers',
                element: <PrivateAdmin><AllSellers></AllSellers></PrivateAdmin>
            },
            {
                path: '/dashboard/allbuyers',
                element: <PrivateAdmin><AllBuyers></AllBuyers></PrivateAdmin>
            },
            {
                path: '/dashboard/myproducts',
                element: <PrivateSeller><MyProducts></MyProducts></PrivateSeller>
            },
            {
                path: '/dashboard/reporteditems',
                element: <PrivateAdmin><ReportedItem></ReportedItem></PrivateAdmin>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
])


export default router