import SignInPage from "../../../pages/User/signin";
import SignUpPage from "../../../pages/User/signup";
import ForgotPassword from "../../../pages/User/ForgotPassword/index.page";
import ResetPassword from "../../../pages/User/ResetPassword/index.page";
import routesMap from "../../../routeControl/userRouteMap";

export default function routes(){
    return [
        {
            path : routesMap.HOME.path,
            name : "",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.HOME.path,
            element : <SignInPage />
        }
    ]
}