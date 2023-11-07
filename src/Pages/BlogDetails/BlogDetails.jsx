import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import CommentBox from "./CommentBox";
import { Button } from "flowbite-react";
import { AuthContext } from "../../Providers/AuthProvider";

const BlogDetails = () => {

    const { id } = useParams();
    const {user} = useContext(AuthContext);
    const [blog, setBlog] = useState([]);
    const axiosSecure = useAxiosSecure();
    const url = `/blog/${id}`;
    const { isLoading, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const response = await axiosSecure.get(url);

            // console.log(response.data);
            setBlog(...response.data)
            return response.data;

        },
        retry: 10,
    })



    if (isLoading) {

        return 'Loading...'
    }
    if (error) return 'An error has occurred: ' + error.message;

    console.log(blog)
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mt-5">
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 md:mt-40 lg:mt-0 text-4xl lg:text-2xl font-bold text-center'>{blog?.title}</h1>
            </div>
            <div className="p-10">
                <div className="flex justify-between gap-10 items-center w-[1024px">
                    <div className="w-[4000px] h-[450px] rounded overflow-hidden shadow-lg shadow-blue-700 p-10 ml-20 mt-10">
                        <img className="w-full h-32" src={blog?.image} alt="Card Image" />


                        <div className="flex justify-center">
                            <img className="w-16 h-16 rounded-full -mt-8 border-solid border-blue-900 border-8" src={blog?.userImage} alt="Small Round Image" />
                        </div>

                        <div className="px-6 py-4">
                            <h1 className="text-center grays"><span className="font-bold">Blog By: </span>{blog?.userName}</h1>
                            <h1 className="text-center mt-3 mb-5"><span className="font-bold">Published On: </span>{blog?.dateTime?.split("T")[0]}</h1>
                            <div className="font-bold text-sm mb-2 text-center">{blog?.title}</div>

                        </div>
                    </div>

                    <div>
                        <hr className="border-solid border-2 border-blue-500 shadow-blue-900 shadow-2xl mt-10" />
                        <div>
                            <p className="max-h-80 overflow-y-auto mt-10 mb-10 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white text-xl p-4 rounded-lg shadow-2xl">
                                {blog?.long}
                            </p>

                        </div>
                        <hr className="border-solid border-2 border-blue-500 shadow-blue-900 shadow-2xl mt-10" />
                    </div>


                </div>
                {
                    user?.email === blog?.userMail ? <div className="flex justify-end"><Link to={`/blogUpdate/${blog?._id}`}><Button className="w-52 h-20">Update Blog</Button></Link></div> : <div/>
                }

            </div>
            <div className="mb-10">
                <CommentBox blog={blog}></CommentBox>
            </div>


        </div>
    );
};

export default BlogDetails;