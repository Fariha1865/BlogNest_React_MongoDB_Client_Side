'use client';
import { useContext } from "react";
import logo from "../assets/logo.png"
import { Button, Navbar } from 'flowbite-react';
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import "./navbar.css"
const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Navbar fluid rounded className="bg-gradient-to-r from-sky-300 via-sky-400 to-tile-300">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} alt="Flowbite React Logo" className="w-40 rounded-md" />
                </Navbar.Brand>
                <div className="flex md:order-2">

                    {
                        user ?
                            <div className="flex gap-5">
                                <img src={user?.photoURL} className="w-12 h-12 rounded-full" />
                                <Button onClick={logOut}>LogOut</Button>
                            </div>
                            :
                            <div className="flex gap-5 items-center">
                                <NavLink to="/login"><Button color="info">Login</Button></NavLink>
                                <NavLink to="/register"><Button>Register</Button></NavLink>
                            </div>
                    }
                </div>
                <Navbar.Toggle/>

                <Navbar.Collapse>
                    <NavLink to="/" className="mt-2">
                        Home
                    </NavLink>
                
                    <NavLink to="/addBlog" className="mt-2">Add Blog</NavLink>
                    <NavLink to="/allBlogs" className="mt-2">All Blogs</NavLink>
                    <NavLink to="/blogUpdate/6547afdf9b7a5a8708226351" className="mt-2">Featured Blogs</NavLink>
                    <NavLink to="/wishlist" className="mt-2">Wishlist</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;