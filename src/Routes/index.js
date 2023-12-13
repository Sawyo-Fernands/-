import { useContext } from "react"
import { DrawerRoutes } from "./drawerRoutes"
import StackRoutes from "./stackRoutes"
import { AuthContext } from "../context/authContext"

export default function  Routes(){
    const { signed } = useContext(AuthContext)


return signed ? <DrawerRoutes /> : <StackRoutes />

}