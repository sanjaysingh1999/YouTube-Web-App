import Buttons from "./Buttons";

const ButtonList = () =>{
    const list = ["Cricket","Live", "SitComs", "Football", "Ronaldo", "Messi", "India", "BJP", "INC", "Elections","React", "NextJS"];
    return(
        <div className="flex">
            {list.map((item,index) => <Buttons key={index} items={item}/>)}
        </div>
    );
}
export default ButtonList;