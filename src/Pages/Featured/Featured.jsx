
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import "./featured.css"


import React, { useState } from "react";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Featured = () => {

    const axiosSecure = useAxiosSecure();
    const [blogs, setBlogs] = useState();
    const url = '/blogs'
    const { isLoading, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const response = await axiosSecure.get(url);
            setBlogs(response.data)
            return response.data;

        },
        retry: 10,
    })


    let sortedBlogs = [];
    let sorted = blogs?.sort((a, b) => b.long.length - a.long.length);
    sortedBlogs = sorted?.slice(0, 10);
    let i = 1;

    if (sortedBlogs?.length > 0) {
        sortedBlogs = sortedBlogs?.map((item) => ({
            ...item,
            serialNumber: i++,
        }))
    } else {
        sortedBlogs = [{ "title": "", "serialNumber": "", "userMail": "", "image": "" }]
    }


    console.log(sortedBlogs)
    const theme = useTheme([
        getTheme(),
        {
            HeaderRow: `
            background-color: #eaf5fd;
            
          `,
            Row: `
            &:nth-of-type(odd) {
              background-color: #d2e9fb;
              color: black;
              font-weight: 600;
            }
    
            &:nth-of-type(even) {
              background-color: #eaf5fd;
              color: black;
              font-weight: 600;
            }
          `,

   
        },
    ])

    const [search, setSearch] = React.useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message;

    sortedBlogs = {
        nodes: sortedBlogs.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        ),
    };


    const COLUMNS = [
        { label: "Serial Number", renderCell: (item) => item.serialNumber },
        { label: "Blog Title", renderCell: (item) => <h1 title={item.title}>{item.title.split(' ', 3).join(' ')}{item.title.split(' ').length > 3 ? '...' : ''}</h1> },
        { label: "Blog Owner", renderCell: (item) => <div className="flex"><h1>{item.userName}</h1></div> },
        { label: "Blog Owner Image", renderCell: (item) => <div className="flex justify-center mr-10"><img src={item.userImage} className="w-10 h-10 rounded-full" /></div> },
        { label: "Action", renderCell: () => <h1 className="bg-blue-500 p-2 w-20 rounded-md cursor-pointer text-white transform hover:scale-110 transition duration-300 ease-in-out">details</h1> },
    ];


    return (
        <>
            <div className="max-w-6xl mx-auto md:p-10 px-1">
                <div className="mb-14">
                    <label htmlFor="search" className="text-xl font-bold text-blue-800">
                        Search by Blog-Title:&nbsp;
                        <input id="search" type="text" value={search} onChange={handleSearch} />
                    </label>
                </div>
                <br />

                <div className="overflow-auto">

                    <CompactTable columns={COLUMNS} data={sortedBlogs} theme={theme} />

                </div>

                <br />
            </div>

        </>
    );
};

export default Featured;