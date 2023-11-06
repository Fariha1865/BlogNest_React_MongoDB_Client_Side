import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/Navbar";
import PageFooter from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
        </div>


    );
};

export default Root;