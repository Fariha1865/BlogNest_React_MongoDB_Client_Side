import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import "../Home/home.css"
import "./addBlog.css"
const AddBlogs = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const handleAddBlog = e => {
        e.preventDefault();


        const form = e.target;

        const userMail = user.email;
        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const short = form.short.value;
        const long = form.long.value;
        const { dateTime } = { dateTime: new Date() };


        const blog = { userMail, title, image, category, short, long, dateTime };
        console.log(blog);

        const url = '/blogs';
        axiosSecure.post(url, blog)
            .then(data => {
                console.log(data.data)

                if (data.data.insertedId) {
                    Swal.fire(
                        'Blog Added!',
                        'The blog has been added in the website successfully',
                        'success',
                    )
                    form.reset();
                }
            })
    }


    return (
        <div className=" mb-10">
        <div className="flex justify-center mt-20 p-5 md:p-0">
            <div className="form-container">
                <form className="form" onSubmit={handleAddBlog}>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input required name="title" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image URL</label>
                            <input required name="image" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input required name="category" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Short Description</label>
                            <input required name="short" type="text" />
                        </div>


                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Long Description</label>
                        <textarea required rows="10" id="textarea2" name="long" className="mb-5"></textarea>
                    </div>
                    <div className="flex justify-center">
                        {/* <input type="submit" value="Submit" className="button"/> */}
                        <button className="button"><input type="submit" value="Submit" /></button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddBlogs;