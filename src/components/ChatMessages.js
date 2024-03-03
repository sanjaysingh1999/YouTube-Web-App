

const ChatMessages = ({name,message}) => {
    return(
        <div className="flex items-center bg-slate-100 w-full mt-2 ">
            <img
          className="h-8 m-2 p-2"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
        
        <span className=" font-bold "> {name}</span>
        <span className="ml-2"> {message}</span>
        </div>
    )
}

export default ChatMessages;