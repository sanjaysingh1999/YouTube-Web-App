import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard, {AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videoData,setVideoData] =useState([]);

    useEffect(()=>{
        getData();
    },[]);
    const getData =  async function (){
        const data = await fetch(YOUTUBE_API_URL);
        const json = await data.json(data);
        setVideoData(json.items);
    }

    return (
        <div className="flex flex-wrap">
            {videoData[0] && <AdVideoCard info={videoData[0]}/>}
           {videoData.map((data) =>  <Link to={"/watch?v="+data.id} key={data.id}><VideoCard  info={data} /> </Link>)}
        </div>
    );
}

export default VideoContainer;