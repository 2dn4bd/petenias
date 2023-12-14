import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PetListing from "../Pages/PetListing/PetListing";
import PetCategoryDetails from "../Pages/petCategoryDetails/PetCategoryDetails";
import PetDetails from "../Pages/petDetails/PetDetails";
import DonationCampaign from "../Pages/DonationCampaign/DonationCampaign";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AllPets from "../Pages/Dashboard/Admin/AllPets/AllPets";
import AllDonation from "../Pages/Dashboard/Admin/AllDonation/AllDonation";
import AddPet from '../Pages/Dashboard/User/AddPet/AddPet';
import MyAddedPet from "../Pages/Dashboard/User/MyAddedPet/MyAddedPet";
import UpdatePet from "../Pages/Dashboard/User/UpdatePet/UpdatePet";
import AdoptionRequest from "../Pages/Dashboard/User/AdoptionRequest/AdoptionRequest";
import CreateDonationCampaign from "../Pages/Dashboard/User/CreateDonationCampaign/CreateDonationCampaign";
import MyDonationCampaign from "../Pages/Dashboard/User/MyDonationCampaign/MyDonationCampaign";
import MyDonationCard from "../Pages/Dashboard/User/MyDonationCard/MyDonationCard";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import EditDonate from "../Pages/Dashboard/User/EditDonate/EditDonate";
import DisplayDonationCampaign from "../Pages/DisplayDonationCampaign/DisplayDonationCampaign";
import DonationCampaignDetails from "../Pages/DonationCampaignDetails/DonationCampaignDetails";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/petlisting',
                element:<PetListing></PetListing>
            },
            {
                path:'/petdetails/:category',
                element:<PetCategoryDetails></PetCategoryDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/pet/${params.category}`)
            },
            {
                path:'/petinfo/:id',
                element:<PetDetails></PetDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/petinfo/${params.id}`)
            },
            {
                path:'/donation',
                element:<DonationCampaign></DonationCampaign>
            },
            {
                path:'/donations/:id',
                element:<DonationCampaignDetails></DonationCampaignDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/getdonation/${params.id}`)
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            // admin routes
            {
                path:'users',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'allpets',
                element:<AdminRoute><AllPets></AllPets></AdminRoute>
            },
            {
                path:'alldonation',
                element:<AdminRoute><AllDonation></AllDonation></AdminRoute>
            },
            {
                path:'allpets/dashboard/updatepet/:id',
                element:<UpdatePet></UpdatePet>,
                loader: ({params}) => fetch(`http://localhost:5000/allpets/${params.id}`)
            },
            // User Routes
            {
                path:'addpet',
                element:<PrivateRoute><AddPet></AddPet></PrivateRoute>
            },
            {
                path:'myaddedpet',
                element:<PrivateRoute><MyAddedPet></MyAddedPet></PrivateRoute>
            },
            {
                path:'adoptionreq',
                element:<PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>
            },
            {
                path:'campaign',
                element:<CreateDonationCampaign></CreateDonationCampaign>
            },
            {
                path:'mycampaign',
                element:<PrivateRoute><MyDonationCampaign></MyDonationCampaign></PrivateRoute>
            },
            {
                path:'donationcard',
                element:<PrivateRoute><MyDonationCard></MyDonationCard></PrivateRoute>
            },
            {
                path:'mycampaign/dashboard/editDonate/:id',
                element:<PrivateRoute><EditDonate></EditDonate></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/editmycampaign/${params.id}`)
            }
        ]
    }
])

export default Routes;