import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import RecentBlog from "./RecentBlog";
import "../home.css"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { InView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import TopBlogWriters from "../TopBlogWriters/TopBlogWriters";

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

    let topUsers = blogs;
    const userMailFrequency = {};

    // Create an object to store user images
    const userImages = {};
    const userNames = {};

    topUsers?.forEach((user) => {
        const { userMail, userImage ,userName} = user;

        // Store user images
        userImages[userMail] = userImage;
        userNames[userMail] = userName;

        if (userMail in userMailFrequency) {
            userMailFrequency[userMail]++;
        } else {
            userMailFrequency[userMail] = 1;
        }
    });

    console.log(userMailFrequency);

    // Sort userMail by frequency in descending order
    const sortedUserMail = Object.keys(userMailFrequency).sort(
        (a, b) => userMailFrequency[b] - userMailFrequency[a]
    );

    const totalUsers = topUsers?.length;

    // Calculate the percentage of contribution for all users
    let contributionPercentages = sortedUserMail?.map((userMail) => ({
        userMail,
        userImage: userImages[userMail], 
        userName: userNames[userMail], 
        frequency: userMailFrequency[userMail],
        percentage: ((userMailFrequency[userMail] / totalUsers) * 100).toFixed(2),
    }));

    // Get the top 5 contributors
    contributionPercentages = contributionPercentages.slice(0, 5);

    console.log(contributionPercentages);


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

            <TopBlogWriters contributionPercentages={contributionPercentages}></TopBlogWriters>

        </>
    );
};

export default RecentBlogs;