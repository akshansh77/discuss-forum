import { Link, useNavigate } from "react-router-dom";
import PostCard from "../PostCard/PostCard";
import "./allpost.css"

const AllPost=()=>{
    const navigate=useNavigate();
    const arr=[1,2,3,4,5,6,1,1,1,1];
    return (<>

    <div className="allpost">
    {/* <a href="/home/allpost/1">
     

    </a> */}
        {arr.map((post,_)=><div key={_} className="singlePost" onClick={()=>navigate(`/home/allpost/`+_.toString())}>
        <PostCard />
        </div>)}
            

    </div>
    
    </> );

}

export default AllPost;