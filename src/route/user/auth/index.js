import SignInPage from "../../../pages/User/signin";
import SignUpPage from "../../../pages/User/signup";
import ForgotPassword from "../../../pages/User/ForgotPassword/index.page";
import ResetPassword from "../../../pages/User/ResetPassword/index.page";
import routesMap from "../../../routeControl/userRouteMap";

export default function routes(){
    return [
        {
            path : routesMap.SIGNIN.path,
            name : "Patient Sign In",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.SIGNIN.path,
            element : <SignInPage />
        }
    ]
}