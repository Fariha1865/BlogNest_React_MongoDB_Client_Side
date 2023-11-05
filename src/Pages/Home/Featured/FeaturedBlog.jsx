import PropTypes from 'prop-types';
const FeaturedBlog = ({blog}) => {
    return (
        <div>
            {
                console.log(blog)
            }
        </div>
    );
};

FeaturedBlog.propTypes={
    blog:PropTypes.object.isRequired
}
export default FeaturedBlog;