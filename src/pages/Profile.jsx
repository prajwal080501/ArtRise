// import React from 'react'

import { Link, useParams } from "react-router-dom";
import ArtContainer from "../components/ArtContainer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {AiFillSetting} from "react-icons/ai"
const Profile = () => {
    const { username } = useParams();
    const { user } = useContext(UserContext);
    console.log(username);


    return (
        <div className="h-fit flex items-center justify-center bg-slate-300">
          
            <div className="bg-white shadow-lg rounded-2xl h-fit absolute top-10 mt-6 pb-3 px-6 w-[98%] lg:w-[80%] ">
                
                <img alt="profil" src={user ? user.coverPicture : "https://images.unsplash.com/photo-1544991185-13fe5d113fe3?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYWluJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=600"} className="w-full lg-6 rounded-t-lg h-28" />
                <Link to="/settings" className="bg-white hover:scale-105 duration-200 absolute top-0 right-10 p-2 rounded-full bg-opacity-70 mt-4">
                <AiFillSetting className="text-2xl hover:animate-spin cursor-pointer text-black" />
            </Link>
                <div className="flex flex-col items-center justify-center p-4 -mt-16  mx-auto w-[60%]">
                    
                    <a href="#" className="relative block">
                        <img alt="profil" src={user ? user.profilePicture : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=600"} className="mx-auto object-cover rounded-full h-40 w-40 border-3 border-white dark:border-gray-800" />
                    </a>
                    <p className="mt-2 text-xl font-bold  text-black ">
                        {user?.username}

                    </p>
 
                    <p className="p-2 px-4 text-sm mt-5  text-black bg-slate-100 rounded-lg">
                        Professional Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque sed laborum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa adipisci beatae delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsam non enim?
                    </p>
                    <div className="w-full p-2 mt-4 rounded-lg">
                        <div className="flex items-center justify-between text-sm text-black ">
                            <p className="flex flex-col">
                                Articles
                                <span className="font-bold text-black ">
                                    34
                                </span>
                            </p>
                            <p className="flex flex-col">
                                Followers
                                <span className="font-bold text-black">
                                    455
                                </span>
                            </p>
                            <p className="flex flex-col">
                                Rating
                                <span className="font-bold text-black">
                                    9.3
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto py-5 px-10 rounded-lg bg-slate-100 max-w-[95%]  mt-6">
                    <div className="w-full  rounded-lg h-fit flex items-start justify-start ">
                        <p className="font-extrabold text-2xl ">Recent Post</p>
                    </div>
                    <div className="overflow-y-scroll w-[100%] rounded-xl h-[50%]">
                        <ArtContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
