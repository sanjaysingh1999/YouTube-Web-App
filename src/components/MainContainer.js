import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    return(
        <div className="m-2 p-2">
            <div> <ButtonList/> </div> 
            <div> <VideoContainer/></div>
                
        </div>
    );
}

export default MainContainer;