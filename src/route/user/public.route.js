import homeRoutes from "./home";
import authRoutes from "./auth";

export default function route(){
    return [
        ...homeRoutes(),
        ...authRoutes()
    ]
}