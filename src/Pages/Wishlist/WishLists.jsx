import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import Wishlist from "./Wishlist";
import "../Home/home.css"
const WishLists = () => {

    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();
    const url = `/userWishlist/${user?.email}`
    const { isLoading, error, data: wishlist } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const response = await axiosSecure.get(url);
            // console.log(response.data);
            return response.data;

        },
        retry: 10,
    })

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className="max-w-6xl mx-auto p-10">
            <div className="flex justify-center mb-20">
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 text-4xl lg:text-2xl font-bold'>My WishList</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {

                    wishlist.map(wishlist => <Wishlist key={wishlist._id} wishlist={wishlist}></Wishlist>)
                }
            </div>
        </div>
    );
};

export default WishLists;