import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../utils/mainSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_URL } from "../utils/constants";
import { cacheSearch } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  
  const [searchQuery,setSearchQuery] = useState("");
  const [searchSuggestion,setSerachSuggestion] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const searchCached = useSelector(store => store.search);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(searchCached[searchQuery]){
      searchSuggestion = searchCached[searchQuery];
    }else{
      var timer = setTimeout(()=>fetchSearchSuggestions(),200);
    }

    return(()=>{
      clearTimeout(timer);
    })
  },[searchQuery]);

  const fetchSearchSuggestions = async function (){
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_URL+searchQuery);
    const json = await data.json();
    setSerachSuggestion(json[1]);
    if(searchQuery!=''){
      dispatch(cacheSearch({
      [searchQuery]:json[1],
    }));
  }
    console.log("API Call - "+searchQuery);
  }
  

  const handleNavClick = () => {
    dispatch(toggleNavBar());
  };
  return (
    <div className="grid grid-flow-col shadow-md ">
      <div className="m-2 p-2 flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={handleNavClick}
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 m-2 p-2">
        <input
        value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border border-gray-400 w-1/2 mt-1 p-1 rounded-l-full px-5"
          type="text"
          onFocus={() => setSearchToggle(true)}
          onBlur={() => setSearchToggle(false)}
        />
        <a href={"/"}><button className="border border-gray-400 mt-1 p-1 bg-gray-300 rounded-r-full">
          Search
        </button></a>
        {searchToggle && <div className="fixed bg-white py-3 px-2 w-[31rem] shadow-lg rounded-md">
        <ul>
          {searchSuggestion.map(s => <li className="hover:bg-gray-100">🔍 {s}</li>)}
          
        </ul>
      </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 m-2 p-2"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
      
    </div>
  );
};

export default Head;
