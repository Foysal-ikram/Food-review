import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import Login from '../Pages/Login';
import MyReview from '../Pages/MyReview';
import Signup from '../Pages/Signup';

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
            }
         
  
        ]
    }

])

export default router ;