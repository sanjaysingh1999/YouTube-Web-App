import { useSelector } from "react-redux";

const SideNav = () => {
    const sideBarFlag = useSelector(store=>store.app.navOpenFlag);
    if(!sideBarFlag) return null;

    return(
         <div className="m-2 p-2 w-48" >
            <div> <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Explore</li>
                <li>Live</li>
            </ul>
            <ul className="mt-2">
                <h1 className="font-bold">Subscription</h1>
                <li>Channels</li>
                <li>Movies</li>
                <li> News</li>
            </ul>
            <ul className="mt-2">
                <h1 className="font-bold">Trending</h1>
                <li>Music</li>
                <li>Movies</li>
                <li> News</li>
            </ul>
            </div>
            
        </div>
    );
}

export default SideNav;