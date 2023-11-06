'use client';

import { Footer } from 'flowbite-react';
import logo from "../assets/logo.png"
const PageFooter = () => {
    return (
        <div>
            <Footer container className="bg-gradient-to-r from-sky-300 via-sky-400 to-tile-300">
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            src={logo}
                            alt="Logo"
                            name="Blog Nest"
                            className='w-40 h-14 rounded-e-md shadow-xl'
                        />
                        <Footer.LinkGroup className='text-black text-lg font-semibold'>
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright href="#" by="BlogNest" year={2023} className='text-black font-medium'/>
                </div>
            </Footer>
        </div>
    );
};

export default PageFooter;