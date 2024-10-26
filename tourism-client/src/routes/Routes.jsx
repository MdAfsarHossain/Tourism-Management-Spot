import { createBrowserRouter } from "react-router-dom";
import SingleCountryAllSpots from "../components/SingleCountryAllSpots";
import Mainlayout from "../layouts/Mainlayout";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyList from "../pages/MyList";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import TouristSpotDetails from "../pages/TouristSpotDetails";
import UpdateProfile from "../pages/UpdateProfile";
import UpdateTouristsSpot from "../pages/UpdateTouristsSpot";
import PrivateRoute from "./PrivateRoute";

// const {user} = useContext(AuthContext);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://tourism-server-opal.vercel.app/allTouristSpot'),
                // loader: () => fetch('http://localhost:5000/allTouristSpot'),
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot />,
                loader: () => fetch('https://tourism-server-opal.vercel.app/allTouristSpot'),
                // loader: () => fetch('http://localhost:5000/allTouristSpot'),
            },
            {
                path: '/addTouristsSpot',
                element: <PrivateRoute><AddTouristsSpot /></PrivateRoute>
            },
            {
                path: '/myList/:email',
                element: <PrivateRoute><MyList /></PrivateRoute>,
                loader: ({params}) => fetch(`https://tourism-server-opal.vercel.app/myList/${params.email}`),
                // loader: ({params}) => fetch(`http://localhost:5000/myList/${params.email}`),
            },
            {
                path: '/touristSpotDetails/:_id',
                element: <PrivateRoute><TouristSpotDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`https://tourism-server-opal.vercel.app/touristSpotDetails/${params._id}`)
                // loader: ({params}) => fetch(`http://localhost:5000/touristSpotDetails/${params._id}`)
            },
            {
                path: '/singleCountryAllSpots/:countryName',
                element: <SingleCountryAllSpots></SingleCountryAllSpots>,
                loader: ({params}) => fetch(`https://tourism-server-opal.vercel.app/specificCountries/${params.countryName}`),
                // loader: ({params}) => fetch(`http://localhost:5000/specificCountries/${params.countryName}`),
            },
            {
                path: '/touristsSpotUpdate/:_id',
                element: <PrivateRoute><UpdateTouristsSpot></UpdateTouristsSpot></PrivateRoute>,
                loader: ({params}) => fetch(`https://tourism-server-opal.vercel.app/touristSpotDetails/${params._id}`)
                // loader: ({params}) => fetch(`http://localhost:5000/touristSpotDetails/${params._id}`)
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])