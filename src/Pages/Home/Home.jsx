import { InView } from "react-intersection-observer";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter/NewsLetter";
import RecentBlogs from "./Recent/RecentBlogs";
import { motion } from 'framer-motion';


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

        </div>
    );
};

export default Home;