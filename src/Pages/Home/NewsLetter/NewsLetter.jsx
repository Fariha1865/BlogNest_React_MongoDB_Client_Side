import Swal from "sweetalert2";
import "./news.css"
const NewsLetter = () => {


    const handleSubscribe =()=>{
          
            document.getElementById('news').value="";
            Swal.fire(
                'Subscribed !',
                'Thank you for subscribing to our newsletter',
                'success',
            )
    }
    return (
        <div>
            <div className="flex justify-center mt-16 md:mt-32">
                <h1 className='button2 font-mono text-blue-700 shadow-lg shadow-blue-500 md:mt-40 lg:mt-0 text-4xl lg:text-2xl font-bold'>Subscribe to our Newsletter</h1>
            </div>

            <div className="flex justify-center my-10">
                <div className="subscribe">
                    <p>SUBSCRIBE</p>
                    <input placeholder="Your e-mail" className="subscribe-input" name="email" type="email" id="news"/>
                    <br />
                    <div className="submit-btn" onClick={handleSubscribe}>SUBMIT</div>
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;