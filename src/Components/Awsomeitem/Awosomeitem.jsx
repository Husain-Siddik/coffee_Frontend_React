import imageOne from '../../assets/images/icons/1.png'
import imageTwo from '../../assets/images/icons/2.png'
import imageThree from '../../assets/images/icons/3.png'
import imageFour from '../../assets/images/icons/4.png'

const Awosomeitem = () => {
    return (
        <div>
            <div className="">

                <div className=" bg-[#ECEAE3]  flex flex-col lg:flex-row gap-5 md:gap-12 items-center justify-center  p-3">

                    <div
                        className=" w-auto md:w-80 hover:w-96 border-2  space-y-2 md:space-y-5 p-14 mt-5 hover:bg-[#a59b7a] transition-all ease-out delay-300 ">
                        
                        <img src={imageOne}></img>
                            <h1 className="font-MyFont text-4xl">Awesome Aroma</h1>
                            <p className="font-ralway">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div
                        className=" w-auto md:w-80 hover:w-96 border-2  space-y-2 md:space-y-5 p-14 mt-5 hover:bg-[#a59b7a] transition-all ease-out delay-300">
                        <img src={imageTwo}></img>
                            <h1 className="font-MyFont text-4xl">High Quality</h1>
                            <p className="font-ralway">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div
                        className="w-auto md:w-80 hover:w-96 border-2  space-y-2 md:space-y-5 p-14 mt-5 hover:bg-[#a59b7a] transition-all ease-out delay-300">
                        <img src={imageThree}></img>
                            <h1 className="font-MyFont text-4xl">Pure Grades</h1>
                            <p className="font-ralway">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div
                        className="w-auto md:w-80 hover:w-96 border-2  space-y-2 md:space-y-5 p-14 mt-5 hover:bg-[#a59b7a] transition-all ease-out delay-300">
                        <img src={imageFour}></img>
                            <h1 className="font-MyFont text-4xl">Proper Roasting</h1>
                            <p className="font-ralway">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Awosomeitem;