import { Rating } from 'flowbite-react';
import PropTypes from 'prop-types';
const TopWriter = ({ topWriter }) => {

    const { frequency, percentage, userImage,userName } = topWriter;
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex md:gap-20 mb-10 justify-center'>

                <img src={userImage} alt="" className='w-10 h-10 rounded-full' />
                <h1 className='w-28 mr-20 font-bold'>{userName}</h1>
                <h1><span className='font-bold'>Total Blogs Written--:  </span>  {frequency}</h1>
                {/* <h1>Contribution: {percentage}%</h1> */}
                <Rating.Advanced percentFilled={parseFloat(percentage)} className="mb-2 w-40">
                 
                </Rating.Advanced>
            </div>
        </div>
    );
};

TopWriter.propTypes = {
    topWriter: PropTypes.object.isRequired
}
export default TopWriter;