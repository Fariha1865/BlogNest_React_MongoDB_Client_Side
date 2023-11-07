import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import "../Home/home.css"
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const EditBlogs = () => {

    const { user } = useContext(AuthContext);
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();

    const url = `/blog/${id}`
    const { isLoading, error, data: blog } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const response = await axiosSecure.get(url);
            // console.log(response.data);
            return response.data[0];
                
        },
        retry: 10,
    })

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message;

    const handleAddBlog = e => {
        e.preventDefault();


        const form = e.target;

        const userMail = user.email;
        const userName = user.displayName;
        const userImage = user.photoURL;
        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const short = form.short.value;
        const long = form.long.value;
        const { dateTime } = { dateTime: new Date() };


        const blog = { userMail,userName,userImage, title, image, category, short, long, dateTime };
        console.log(blog);

        const url = `/blogUpdate/${id}`;
        axiosSecure.put(url, blog)
            .then(data => {
                console.log(data.data)

                if (data.data.modifiedCount >0) {
                    Swal.fire(
                        'Blog Updated!',
                        'The blog has been updated successfully',
                        'success',
                    )
                    // form.reset();
                }
            })
    }

    console.log(blog)

    return (
        <div className="flex justify-center mt-20 p-5 md:p-0">
            <div className="form-container">
                <form className="form" onSubmit={handleAddBlog}>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input required name="title" type="text" defaultValue={blog.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image URL</label>
                            <input required name="image" type="text" defaultValue={blog.image}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input required name="category" type="text" defaultValue={blog.category}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Short Description</label>
                            <input required name="short" type="text" defaultValue={blog.short}/>
                        </div>


                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Long Description</label>
                        <textarea required rows="10" id="textarea2" name="long" className="mb-5" defaultValue={blog.long}></textarea>
                    </div>
                    <div className="flex justify-center">
                        {/* <input type="submit" value="Submit" className="button"/> */}
                        <button className="button"><input type="submit" value="Submit" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBlogs;