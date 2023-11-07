import { InView } from "react-intersection-observer";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter/NewsLetter";
import RecentBlogs from "./Recent/RecentBlogs";
import { motion } from 'framer-motion';
import DrawerContact from "./DrawerContact";


const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            {<InView>
                {({ inView, ref }) => (
                    <motion.h1
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1.5 }}
                    >
                        <NewsLetter></NewsLetter>
                    </motion.h1>
                )}
            </InView>}

            <div className="flex flex-col md:flex-row items-center p-20 gap-5 my-20">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ml4mQJjgX6g" frameBorder="0" allowfullscreen className="w-1/2"></iframe>


                <h1 className="text-2xl font-bold">For more personalized tips<br/> and blog writing suggestions,<br></br>please contact us with your queries..</h1>
                <DrawerContact></DrawerContact>

            </div>
        </div>
    );
};

export default Home;