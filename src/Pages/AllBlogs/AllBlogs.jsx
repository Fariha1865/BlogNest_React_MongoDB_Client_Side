import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import Blog from "./Blog";

const AllBlogs = () => {

    const axiosSecure = useAxiosSecure();
    const url = '/blogs'
    const { isLoading, error, data: allBlogs } = useQuery({
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
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 text-4xl lg:text-2xl font-bold'>Get All Blogs Here</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    allBlogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)

                }
            </div>
        </div>
    );
};

export default AllBlogs;