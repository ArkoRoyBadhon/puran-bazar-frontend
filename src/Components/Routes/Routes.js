import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/MainLayout/Main'
import CategoryPage from '../Pages/CategoryPage/CategoryPage'
import Home from '../Pages/Home/Home'

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
            }
        ]
    }
])


export default router