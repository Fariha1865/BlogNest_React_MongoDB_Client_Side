import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import Wishlist from "./Wishlist";
import "../Home/home.css"
const WishLists = () => {

    const { user } = useContext(AuthContext);
    const url = `/userWishlist/${user?.email}`
    const [list,setList] = useState([])
  
    const setWishList = async () => {
        const response = await axiosSecure.get(url);
        
        // console.log(response.data);
        setList(response.data)
        return response.data;

    }


    const axiosSecure = useAxiosSecure();
    const { isLoading, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: setWishList,
        retry: 10,
    })



    if (isLoading) { 
 
        return 'Loading...'
    }
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className="max-w-6xl mx-auto p-10">
            <div className="flex justify-center mb-20">
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 text-4xl lg:text-2xl font-bold'>My WishList</h1>
            </div>

            {
                list.length>0 ?<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {

                    list.map(wishlist => <Wishlist key={wishlist._id} wishlist={wishlist} setWishList={setWishList}></Wishlist>)
                }
            </div> : <div className="flex justify-center"><div><h1 className="text-center font-bold text-blue-600">No Items Available in your wishlist</h1><img src="https://i.ibb.co/NKHykMQ/no-items-found-acefb40a.gif" alt="" className="w-72"/></div></div>
            }
            
        </div>
    );
};

export default WishLists;