import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import RecentBlog from "./RecentBlog";
import "../home.css"
const RecentBlogs = () => {

    const axiosSecure = useAxiosSecure();
    const url = '/blogs'
    const { isLoading, error, data: blogs } = useQuery({
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
    blogs.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    const featuredBlogs = blogs.slice(0, 6);
    return (

        <>
            <div className="flex justify-center mt-16 md:mt-32">
            <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 md:mt-40 lg:mt-0 text-4xl lg:text-2xl font-bold'>Recent Blogs</h1>
            </div>
            <div className="mt-16 md:mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 max-w-6xl mx-auto">
                {
                    featuredBlogs?.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
                }
            </div>
        </>
    );
};

export default RecentBlogs;