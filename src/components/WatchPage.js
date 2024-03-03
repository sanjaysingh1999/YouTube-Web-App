import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeNavBar } from "../utils/mainSlice";
import { useSearchParams } from "react-router-dom/dist";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeNavBar());
  }, []);

  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col m-1 pt-1 w-full">
      <div className="flex">
        <div>
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full ">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};
export default WatchPage;
