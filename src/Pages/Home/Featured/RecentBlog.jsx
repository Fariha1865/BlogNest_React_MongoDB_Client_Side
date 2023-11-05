import PropTypes from 'prop-types';
const RecentBlog = ({blog}) => {
    return (
        <div>
          <h1>{blog.title}</h1>
        </div>
    );
};

RecentBlog.propTypes={
    blog:PropTypes.object.isRequired
}
export default RecentBlog;