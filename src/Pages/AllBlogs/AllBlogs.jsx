import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import Blog from "./Blog";
import { Select } from "flowbite-react";
import { useState } from "react";
import "../Home/home.css"
import "./blogs.css"

const AllBlogs = () => {

    const axiosSecure = useAxiosSecure();
    const [selectedOption, setSelectedOption] = useState(null);
    const url = '/blogs'
    const { isLoading, error, data: allBlogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const response = await axiosSecure.get(url);
            // console.log(response.data);
            return response.data;

        },
        retry: 10,
    })
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message;


    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
    console.log(selectedOption);

    return (


        <div className="max-w-6xl mx-auto p-10">
            <div className="flex justify-center mb-20">
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 text-4xl lg:text-2xl font-bold'>Get All Blogs Here</h1>
            </div>

            <div className="flex justify-between items-center mt-10 mb-20">
                <Select className="button w-60 font-bold"
                    label="Select an option"
                    dismissOnClick={false}
                    value={selectedOption}
                    onChange={(e) => handleOptionSelect(e.target.value)}
                >
                    <option value="" className="font-bold">Filter By Category</option>
                    <option value="1" className="font-bold">general</option>
                    <option value="2">sports</option>
                    <option value="3">science</option>
                    <option value="4">fashion</option>
                    <option value="5">technology</option>
                </Select>

                <div className="container">
                    <div className="search-container">
                        <input className="input" type="text" placeholder="Search By Title"/>
                            <svg viewBox="0 0 24 24" className="search__icon">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                    </path>
                                </g>
                            </svg>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    allBlogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)

                }
            </div>
        </div>
    );
};

export default AllBlogs;