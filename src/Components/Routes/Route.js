import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import ServiceDetails from '../Home/ServiceDetails';
import Main from '../Layout/Main';
import AddService from '../Pages/AddService';
import AllServices from '../Pages/AllServices';
import Login from '../Pages/Login';
import MyReview from '../Pages/MyReview';
import Signup from '../Pages/Signup';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Main></Main> ,
        children : [
            {
                path : '/' ,
                element : <Home></Home>
            },
            {
                path : '/login' ,
                element : <Login></Login>
            } ,
            {
                path : '/signup' ,
                element : <Signup></Signup>
            }
             ,
            {
                path : '/myreview' ,
                element : <MyReview></MyReview>
            } ,

            {
                path : '/services' ,
                element : <AllServices></AllServices> 
               
            } ,

            {
                path : '/services/:id' ,
                element : <ServiceDetails></ServiceDetails> ,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            } ,
            {
                path : '/addservice' ,
                element : <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path : '/addservice' ,
                element : <PrivateRoute><AddService></AddService></PrivateRoute>
            }

  
        ]
    }

])

export default router ;