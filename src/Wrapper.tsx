import AuthProvider from "./context/AuthProvider/AuthProvider";
import App from "./App";

const Wrapper = ()=>{
   return(
        <AuthProvider>
            <App/>
        </AuthProvider>
   )
}

export default Wrapper;