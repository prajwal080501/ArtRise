// import React from 'react'

import ArtContainer from "../components/ArtContainer";
import { data } from "../data/data";

const Profile = () => {
  return (
    <div className="h-fit flex items-center justify-center bg-slate-300">

<div className="bg-white shadow-lg rounded-2xl h-fit absolute top-10 mt-6 pb-3 px-6 w-[80%] ">
    <img alt="profil" src="https://images.unsplash.com/photo-1544991185-13fe5d113fe3?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYWluJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=600" className="w-full lg-6 rounded-t-lg h-28"/>
    <div className="flex flex-col items-center justify-center p-4 -mt-16  mx-auto w-[60%]">
        <a href="#" className="relative block">
            <img alt="profil" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=600" className="mx-auto object-cover rounded-full h-40 w-40 border-3 border-white dark:border-gray-800"/>
        </a>
        <p className="mt-2 text-xl font-bold  text-black ">
            Charlie
        </p>
        <p className="mb-4 text-xs  text-black 400">
            Nantes
        </p>
        <p className="p-2 px-4 text-s  text-black bg-slate-200 rounded-lg">
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

        <div className="mx-auto max-w-[95%]  mt-6">
            <div className="w-full  rounded-lg h-fit flex items-start justify-start ">
                <p className="font-bold text-lg ">Recent Post</p>
            </div>
         <div className="bg-slate-100 w-auto rounded-xl h-[50%]">
         <ArtContainer/>
         </div>
        </div>
    </div>
    </div>
  )
}

export default Profile;
