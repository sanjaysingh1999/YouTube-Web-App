import SideNav from "./SideNav";
import {Outlet} from "react-router-dom";

const Body = () => {
    return(
        <div className="flex">
            <SideNav/>
            <Outlet/>
             </div>
    );
}

export default Body;