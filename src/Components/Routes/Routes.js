import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/MainLayout/Main'
import CategoryPage from '../Pages/CategoryPage/CategoryPage'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'

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
            }
        ]
    }
])


export default router