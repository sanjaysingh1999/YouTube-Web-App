import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/messageSlice";
import { generateLiveMessage, generateNames } from "../utils/helper";


const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const messages = useSelector(store=> store.chat.messages);
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({name:generateNames(),message:generateLiveMessage(20)+" 💬"}));
        },2000);

        return(()=>{
            clearInterval(i);
        })
    },[])

    return(
        <>
        <div className="ml-2 w-full border border-black rounded-lg  h-[500px] overflow-y-scroll flex flex-col-reverse">
            
            {messages.map((data,index)=><ChatMessages key={index} name={data.name} message={data.message} />)}
        </div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({name:"Sanjay Singh",message:liveMessage}));
            setLiveMessage("");
        }} className="border border-black w-full rounded-md ml-2">
            <input onChange={(e)=>setLiveMessage(e.target.value)}
             className= "p-1 bg-slate-100  w-96 m-2" type="text" value={liveMessage} ></input>
            <button className="bg-green-300 p-1 w-20 rounded-md"> Send</button>
        </form>
        </>
    )
}

export default LiveChat;