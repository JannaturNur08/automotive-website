import { Outlet } from "react-router-dom";

import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="font-roboto overflow-x-hidden">
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;