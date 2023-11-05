import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import FeaturedBlog from "./FeaturedBlog";

const FeaturedBlogs = () => {

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
    const featuredBlogs = blogs.slice(0, 1);
    return (
        <div>
           {
            featuredBlogs?.map(blog=><FeaturedBlog key={blog._id} blog={blog}></FeaturedBlog>)
           }
        </div>
    );
};

export default FeaturedBlogs;