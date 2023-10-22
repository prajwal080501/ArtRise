import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const {user,logout} = useContext(UserContext)
    const navigate = useNavigate();
    const deleteUser = async () => {
        let userId = user?.id;

        const response = await fetch("http://localhost:8000/api/user", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ userId })
        })

        const data = await response.json();
        console.log(data);

        toast.success("Account deleted successfully");
        logout();
        navigate("/auth")

    }
    return (
        <div className="absolute top-0 w-screen h-screen flex items-center bg-gray-100">
            <div className="bg-white h-fit max-w-[95%] absolute top-20 left-0 right-0 px-5 py-8 w-[50%] mx-auto rounded-lg shadow-lg">
            <div className="w-full flex justify-between px-4">
                <h1 className="text-3xl font-extrabold">Settings</h1>
            </div>
            <div className='w-full flex items-center justify-between'>
     
            <div className="h-[100%] ">
                <ul className="flex flex-col space-y-2 h-full">
                    <li onClick={deleteUser} className="bg-red-500 text-white p-2 font-medium rounded-lg hover:bg-red-600 duration-200 ease-linear cursor-pointer">Delete Account</li>
                    <hr />
                    <li  className="bg-green-500 p-2 rounded-lg cursor-pointer text-white font-medium">Update Account</li>
                </ul>
            </div>
            <div className="flex flex-col w-fit items-center justify-end space-y-5 ">
                    <img src={user?.profilePicture} alt="" className="h-32 w-32 rounded-full" />
                    <p className="text-2xl font-bold">{user?.username}</p>
                </div>
            </div>
        
            </div>
        </div>
    )
}

export default Settings;