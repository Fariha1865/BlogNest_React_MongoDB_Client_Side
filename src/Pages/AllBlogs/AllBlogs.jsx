import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import Blog from "./Blog";
import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
import "../Home/home.css"
import "./blogs.css"

const AllBlogs = () => {



    const axiosSecure = useAxiosSecure();
    const [selectedOption, setSelectedOption] = useState("");
    const queryClient = useQueryClient();
    const [allBlogs, setAllBlogs] = useState([])


    const handleOptionSelect = (option) => {

        queryClient.invalidateQueries('categoryBlogs');
        setSelectedOption(option);

    };




    const categoryUrl = `/categoryBlogs/${selectedOption}`;
    const url = '/blogs';

    // const { isLoading, error } = useQuery({
    //     queryKey: ['blogs'],
    //     queryFn: async () => {


    //         const response = await axiosSecure.get(url);
    //         console.log(response.data);
    //         setAllBlogs(response.data);
    //         return response.data


    //     },
    //     retry: 10,

    // })
    useEffect(() => {

        axiosSecure.get(url)
            .then(response => {
                console.log(response.data);
                setAllBlogs(response.data);
            })

    }, [axiosSecure])




    const handleSearch = () => {
        const searchedTitle = document.getElementById('search').value;
        document.getElementById('search').value = "";
        console.log(searchedTitle)

    }


    useEffect(() => {
        axiosSecure.get(categoryUrl)
            .then(res => {
                setAllBlogs(res.data);
                console.log(res.data);
            })
    }, [selectedOption, axiosSecure, categoryUrl]);

    // if (isLoading) { return 'Loading...' }
    // if (error) { return 'An error has occurred: ' + error.message; }

    return (


        <div className="max-w-6xl mx-auto p-10">
            <div className="flex justify-center mb-20">
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 text-4xl lg:text-2xl font-bold'>Get All Blogs Here</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center mt-10 mb-20">
                <Select className="button w-60 font-bold"
                    label="Select an option"
                    dismissOnClick={false}
                    value={selectedOption}
                    onChange={(e) => handleOptionSelect(e.target.value)}
                >
                    <option value="">Filter By Category</option>
                    <option value="general" className="font-bold">general</option>
                    <option value="sports" className="font-bold">sports</option>
                    <option value="science" className="font-bold">science</option>
                    <option value="fashion" className="font-bold">fashion</option>
                    <option value="technology" className="font-bold">technology</option>
                </Select>

                <div className="container">
                    <div className="search-container">
                        <input className="input" type="text" id="search" placeholder="Search By Title" />

                        <svg viewBox="0 0 24 24" className="search__icon" onClick={handleSearch}>
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