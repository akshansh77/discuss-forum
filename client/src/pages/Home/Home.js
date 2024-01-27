import React, { useState } from 'react'
import "./home.css"
import { Outlet, useNavigate } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
    
const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='homeContainer'>
            <div className='leftPanelHome'>
                <button className='leftPanelButton activeBtn' onClick={()=>navigate("/home/allpost")}>All Post</button>
                <button className='leftPanelButton' onClick={()=>navigate("/home/commentpost")}>Commented Post</button>
                <button className='leftPanelButton' onClick={()=>navigate("/home/replypost")}>Replied Post</button>

                <button className='leftPanelButton' onClick={()=>navigate("/home/createpost")}> <PlusCircle/>Create Post</button>
            </div>
            <div className='rightPanelHome'>
                <Outlet/>

            </div>
        </div>
    )
}
    
export default Home