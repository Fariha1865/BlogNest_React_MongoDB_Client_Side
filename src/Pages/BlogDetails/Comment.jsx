import PropTypes from 'prop-types';
const Comment = ({ commentEach }) => {

    const { userName, userImage, comment ,dateTime} = commentEach;

    console.log(commentEach)
    return (
        <div>
            
                <div className="mb-10 w-20">
                    <div className="flex items-center">
                        <img className="w-12 h-12 rounded-full mr-4" src={userImage} alt="User Avatar" />
                        <div>
                            <p className="text-lg font-semibold text-blue-800">{userName}</p>
                            <p className="text-blue-700"><span>Posted on  :  </span><span>{dateTime.split("T")[0]}</span></p>
                        </div>
                    </div>
                    <p className="text-blue-900 mt-4">
                        {comment}

                    </p>
                </div>
            </div>
       
    );
};

Comment.propTypes={
    commentEach:PropTypes.object.isRequired
}
export default Comment;