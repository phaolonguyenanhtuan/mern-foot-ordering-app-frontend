//import { useCreateMyUser } from "@/api/MyUserApi";
import {  Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
    children:React.ReactNode,
}

const Auth0ProviderWithNavigate = ({children}: Props) => {
   // const {createUser} = useCreateMyUser();
   const navigate = useNavigate();
  // const {getAccessTokenSilently} = useAuth0();
 
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectURI = import.meta.env.VITE_AUTH0_CALLBACK_URL;  
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE; 

    if(!domain || !clientId || !redirectURI || !audience){
        throw new Error("unable to initialise auth");
    }

    const onRedirectCallback = () => {
        //console.log("User",user);
        // if(user?.sub && user?.email){
        //     createUser({auth0Id:user.sub,email:user.email});
        // }
        //const token = await getAccessTokenSilently();
       // console.log("token",token);
        navigate("/auth-callback");
        
    }

    return (
        <Auth0Provider 
            domain={domain} 
            clientId={clientId} 
            authorizationParams={{
                redirect_uri:redirectURI,
                audience,
            }}

            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
  
}

export default Auth0ProviderWithNavigate
