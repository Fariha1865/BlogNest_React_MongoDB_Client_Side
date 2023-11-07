import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import RecentBlog from "./RecentBlog";
import "../home.css"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { InView } from "react-intersection-observer";
import { motion } from 'framer-motion';

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

    if (isLoading) { <Skeleton count={10} /> }
    if (error) return 'An error has occurred: ' + error.message;
    blogs?.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    const featuredBlogs = blogs?.slice(0, 6);
    return (

        <>

            <div className="flex justify-center mt-16 md:mt-32">
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 md:mt-40 lg:mt-0 text-4xl lg:text-2xl font-bold'>Recent Blogs</h1>
            </div>


            {
                <InView>
                    {({ inView, ref }) => (
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 2.5 }}
                        >
                            <div className="mt-16 md:mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-w-6xl mx-auto p-20">
                                {featuredBlogs?.length > 0 ? featuredBlogs?.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>) : <Skeleton count={10} />}
                            </div>
                        </motion.h1>
                    )}
                </InView>

            }



        </>
    );
};

export default RecentBlogs;