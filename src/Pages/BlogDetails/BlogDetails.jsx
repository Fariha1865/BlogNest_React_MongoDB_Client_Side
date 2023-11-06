import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import CommentBox from "./CommentBox";

const BlogDetails = () => {

    const { id } = useParams();
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
        <div className="max-w-6xl mx-auto">
            <div className="p-10">
                <div className="flex justify-between gap-10">
                    <div className="w-2/4 rounded overflow-hidden shadow-lg shadow-blue-700 p-10">
                        <img className="w-full h-72" src={blog?.image} alt="Card Image" />


                        <div className="flex justify-center">
                            <img className="w-16 h-16 rounded-full -mt-8 border-solid border-blue-900 border-8" src={blog?.userImage} alt="Small Round Image" />
                        </div>

                        <div className="px-6 py-4">
                            <h1 className="text-center"><span className="font-bold">Blog By: </span>{blog?.userName}</h1>
                            <h1 className="text-center mt-3 mb-5"><span className="font-bold">Published On: </span>{blog?.dateTime?.split("T")[0]}</h1>
                            <div className="font-bold text-xl mb-2 text-center">{blog?.title}</div>

                        </div>
                    </div>
                    <div>
                        <CommentBox></CommentBox>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default BlogDetails;