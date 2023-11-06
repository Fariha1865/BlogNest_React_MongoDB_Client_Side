
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";



import React from "react";

const Featured = () => {


    let data = [
        {
          title: 'Task 1',
          name: 'Complete Task 1',
          category: 'SETUP',
          date: '02/15/2020',
        },
        {
          title: 'Task 2',
          name: 'Learn JavaScript',
          category: 'LEARN',
          date: '03/28/2020',
        },
        {
          title: 'Task 3',
          name: 'Set Up VSCode',
          category: 'SETUP',
          date: '02/17/2020',
        },
        {
          title: 'Task 4',
          name: 'Learn React',
          category: 'LEARN',
          date: '04/08/2020',
        },
        {
          title: 'Task 5',
          name: 'Complete Task 2',
          category: 'SETUP',
          date: '05/28/2020',
        },
        {
          title: 'Task 6',
          name: 'Learn Node',
          category: 'LEARN',
          date: '06/18/2020',
        },
        {
          title: 'Task 7',
          name: 'Learn GraphQL',
          category: 'LEARN',
          date: '07/30/2020',
        },
      ];
    

    const theme = useTheme(getTheme());

    const [search, setSearch] = React.useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    data = {
        nodes: data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        ),
    };

    const COLUMNS = [
        { label: "Task", renderCell: (item) => item.name },
        { label: "Task", renderCell: (item) => item.title },
        { label: "Type", renderCell: (item) => item.category },
        { label: "Tasks", renderCell: (item) => item.date },
    ];


    return (
        <>
            <label htmlFor="search">
                Search by Task:&nbsp;
                <input id="search" type="text" value={search} onChange={handleSearch} />
            </label>
            <br />

            <CompactTable columns={COLUMNS} data={data} theme={theme} />

            <br />
          
        </>
    );
};

export default Featured;