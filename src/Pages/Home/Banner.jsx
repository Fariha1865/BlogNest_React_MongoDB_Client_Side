import "./home.css"
import banner from "../../assets/Banner_1.mp4"
import logo from "../../assets/logo.png"
import bg from "../../assets/bannerBG.png"

const Banner = () => {


    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center h-[500px]">
                <video width="640" height="360" autoPlay loop muted>
                    <source src={banner} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative w-full h-full">



                    <div style={{ backgroundImage: `url(${bg})` }} className="h-full md:h-[200px] lg:h-full bg-cover bg-center absolute top-0 left-0 w-full opacity-50 z-0"></div>

                    <div className="h-full md:mt-20 lg:mt-0 absolute top-0 left-0 w-full flex flex-col items-center justify-center z-10 shadow-2xl">
                        <img src={logo} className="w-48 rounded-md lg:mt-56 drop-shadow-2xl" />
                        <h1 className="text-4xl font-bold bg-clip-text  text-transparent bg-gradient-to-r from-blue-700 via-teal-800 to-blue-900 drop-shadow-2xl">Where ideas unite,<br /> Stories ignite</h1>
                    </div>


                    <div className="absolute top-0 left-0 w-full h-full bg-blue-50 opacity-50 z-1"></div>
                </div>

            </div>
        </div>
    );
};

export default Banner;