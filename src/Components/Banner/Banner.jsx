import bgimge from '../../../src/assets/images/more/3.png'
//import logo from '../../assets/images/more/3.png'
const Banner = () => {
    return (
        <div>


            <div
                 style={{ backgroundImage: `url(${bgimge})` }}

                className="         
    md:h-[700px] w-full   bg-cover md:bg-bottom
    flex items-center justify-end">
                <div className=" mt-32 md:mt-0 md:w-1/2  space-y-10 pb-8 md:pb-2">
                    <h1 className=" text-white text-6xl font-MyFont">Would you like a Cup of Delicious Coffee?</h1>

                    {/* <img src={logo} alt="" /> */}

                    <p className="text-white text-xl font-ralway">It's coffee time - Sip & Savor - Relaxation in every sip! Get the
                        nostalgia back!! Your companion of
                        every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                    <button
                        className="  bg-[#E3B577]  text-2xl font-MyFont px-8 py-3  hover:bg-black  text-black hover:text-white border-2 rounded-sm">Learn
                        More</button>
                    {/* <!-- <img src="../assets/images/more/3.png" alt="" srcset=""> --> */}
                </div>
            </div>

        </div>
    );
};

export default Banner;