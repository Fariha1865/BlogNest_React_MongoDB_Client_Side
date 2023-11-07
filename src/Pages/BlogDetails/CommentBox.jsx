import { Button } from "flowbite-react";
import "./details.css"
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import Comment from "./Comment";
const CommentBox = ({ blog }) => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(false);

    const commentsUrl = `/getComments/${blog?._id}`
    useEffect(() => {
        axiosSecure.get(commentsUrl)
            .then(data => {
                setComments(data.data)
                console.log(data.data)

                if (data.data.insertedId) {
                    Swal.fire(
                        'Comment Added!',
                        'Your comment has been added successfully',
                        'success',
                    )

                }
            })
    }, [newComment, axiosSecure, commentsUrl])

    const handleComment = () => {

        const comment = document.getElementById('comment').value;
        document.getElementById('comment').value = "";
        const userMail = user?.email;
        const userName = user?.displayName;
        const { dateTime } = { dateTime: new Date() };
        const userImage = user?.photoURL;
        const id = blog?._id;

        const commentData = { userMail, userName, userImage, comment, dateTime, id };


        const url = '/comments';
        axiosSecure.post(url, commentData)
            .then(data => {
                console.log(data.data)

                if (data.data.insertedId) {
                    setNewComment(!newComment)
                    Swal.fire(
                        'Comment Added!',
                        'Your comment has been added successfully',
                        'success',
                    )

                }
            })
    }

    comments.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    return (
        <div>
            {
                user?.email !== blog?.userMail ? <div className="flex items-center">
                    <div className="inputs-container md:w-96 mt-10 border-b-4 border-x-blue-900">
                        <input className="inputs w-96 h-40" name="text" type="text" id="comment" placeholder="Add a Comment" />
                        <label className="label">Type Comment</label>
                        <div className="topline"></div>
                        <div className="underline"></div>
                    </div>
                    <Button className="mt-10 h-12 rounded-l-none" onClick={handleComment}>Publish Comment</Button>
                </div> : <div/>
              
             
            }

            <div className=" bg-blue-200 p-4 rounded-lg h-96 overflow-y-auto">
                {
                    comments?.map(comment => <Comment key={comment._id} commentEach={comment}></Comment>)
                }
            </div>
        </div>
    );
};

CommentBox.propTypes={
    blog:PropTypes.object.isRequired
}
export default CommentBox;