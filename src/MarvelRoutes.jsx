import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouters } from "./router/AppRouters"


export const MarvelRoutes = () => {
    return (
        <AuthProvider>
            <AppRouters/>
        </AuthProvider>
    )
}
