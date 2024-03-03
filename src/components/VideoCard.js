const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {thumbnails,title} = snippet;
    return (
        <div className="m-2 w-64 shadow-sm">
            <img className="rounded-lg w-64" alt="thumbnail" src={thumbnails.medium.url}/>
            <ul>
                <li className="font-bold">{title}</li>
                <li>{snippet.channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    );
}

export const AdVideoCard = ({info}) => {
    return (
        <div className="m-1 p-1 border border-red-600"><VideoCard info={info}/></div>
    );
}

export default VideoCard;