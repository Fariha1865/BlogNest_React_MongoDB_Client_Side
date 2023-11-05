import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/Navbar";


const Root = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>


    );
};

export default Root;