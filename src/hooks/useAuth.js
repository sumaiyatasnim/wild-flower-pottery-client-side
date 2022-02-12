import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const useAuth = () => {
    //context create korsi auth provider er moddhe ekhon shei context use korbo.
    const auth = useContext(AuthContext);

    //jto jinish lagbe shobei return e auth er moddhe peye jabo
    return auth;
}

export default useAuth;