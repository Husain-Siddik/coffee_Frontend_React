import footerimge  from '../../assets/images/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className=''>

            <div className='mx-auto'>
                <footer
                    className=" footer bg-[url('../../assets/images/more/13.jpg')] text-base-content p-10 flex   items-center justify-center mt-4 md:mt-20">
  

                    <div className=" flex  flex-col md:flex-row gap-10 container items-center  justify-center">
                        <div className="  flex-1 space-y-5">
                            {/* <img className="w-20 h-20" src="../assets/images/more/logo1.png" alt="" srcset=""> */}
                            <img src={footerimge} className='w-20 h-20' alt="" />
                                <h1 className="font-MyFont text-5xl font-semibold">Espresso Emporium</h1>
                                <p className="font-ralway text-xl">Always ready to be your friend. Come & Contact with us to share your
                                    memorable moments, to share with your best companion.</p>

                                <div className="flex gap-3  text-4xl">
                                    <p>
                                        <FaFacebook />
                                    </p>
                                    <p>
                                        <TiSocialTwitter />
                                    </p>
                                    <p>
                                        <FaInstagram />
                                    </p>
                                    <p>
                                        <FaLinkedin />
                                    </p>
                                </div>
                                <p className="font-MyFont text-5xl">Get in Touch</p>
                                <div className="font-ralway text-xl ">
                                    <p className="flex items-center  gap-4"><span>
                                        <FaPhone />
                                    </span> +88 01533 333 333</p>
                                    <p className="flex items-center  gap-4"><span>
                                       <MdEmail />
                                    </span>example@gmail.com</p>
                                    <p className="flex items-center  gap-4"><span>
                                        <FaLocationDot />
                                    </span> 72, Wall street, King Road, Dhaka</p>
                                </div>
                        </div>
                        {/* <!--  --> */}



                        <form className=" flex-1  space-y-6 pt-3 md:pt-24">
                            <h6 className="font-MyFont text-5xl font-semibold">Connect with Us</h6>
                            <fieldset className="w-auto md:w-3/4">
                                <div className="space-y-4  ">
                                    <input type="text" placeholder="Name" className="input   w-full max-w-xs" />
                                    <input type="Email" placeholder="email" className="input  w-full max-w-xs" />
                                    <textarea placeholder="Massage" className="textarea  textarea-lg w-full max-w-xs"></textarea>

                                </div>
                            </fieldset>
                            <button className="font-MyFont text-xl  px-4 rounded-badge border-x-black border  "><span
                                className="pr-2">Send </span>

                                <span>Message</span> </button>

                        </form>
                    </div>

                </footer>
            </div>


        </div>
    );
};

export default Footer;