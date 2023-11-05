import { Button, Card } from 'flowbite-react';
import PropTypes from 'prop-types';
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const RecentBlog = ({ blog }) => {

    const { title, image, short, category } = blog;
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const submit = () => {

        {
            confirmAlert({
                title: 'Confirm adding to Wishlist',
                message: 'Are you sure to do this?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => handleWishlist(),
                    },
                    {
                        label: 'No',
                        // onClick: () => alert('Click No')
                    },
                ],
            })
        }
    }
    const handleWishlist = () => {

        const email = user?.email;
        const wishlist = { email, title, image, short, category }
        const url = '/wishlist';
        axiosSecure.post(url, wishlist)
            .then(data => {
                console.log(data.data)

                if (data.data.insertedId) {
                    Swal.fire(
                        'Blog Added to Wishlist !!',
                        'The blog has been added to your wishlist successfully',
                        'success',
                    )

                }
            })
    }
    return (
        <div>
            <Card
                className="rounded-md  bg-gray-100 shadow-lg shadow-slate-400 text-black transform hover:scale-105 transition duration-300 ease-in-out"
                renderImage={() => <img src={image} alt="image 1" className='w-full h-40 rounded-md ' />}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-10">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 h-20 mt-5">
                    {short}
                </p>
                <div className='flex items-center justify-between'>
                    <h1><span className='font-bold'>Category: </span>{category}</h1>
                    <div className="flex flex-col gap-2 items-center">
                        <Button color="info">Details</Button>
                        <Button onClick={submit}>Wishlist</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

RecentBlog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default RecentBlog;