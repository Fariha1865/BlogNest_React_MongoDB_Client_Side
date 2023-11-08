import PropTypes from 'prop-types';
import TopWriter from './Topwriter';
const TopBlogWriters = ({ contributionPercentages }) => {


    return (
        <div>
            <div className="flex justify-center mt-16 mb-20">
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 md:mt-40 lg:mt-0 text-4xl lg:text-2xl font-bold'>Top Contributed Blog Writers</h1>
            </div>

            <div className='bg-blue-100 p-5'>
                {
                    contributionPercentages.map((topWriter, index) => <TopWriter key={index} topWriter={topWriter}></TopWriter>)
                }
            </div>
        </div>
    );
};
TopBlogWriters.propTypes = {

    contributionPercentages: PropTypes.array.isRequired
}
export default TopBlogWriters;