import firstimge  from '../../assets/images/cups/Rectangle 9.png'
import secondimge  from '../../assets/images/cups/Rectangle 10.png'
import thirdimge  from '../../assets/images/cups/Rectangle 11.png'
import fourthimge  from '../../assets/images/cups/Rectangle 12.png'
import fifthimge  from '../../assets/images/cups/Rectangle 13.png'
import sixethimge  from '../../assets/images/cups/Rectangle 14.png'
import seventhimge  from '../../assets/images/cups/Rectangle 15.png'
import eigthimge  from '../../assets/images/cups/Rectangle 16.png'

const Instasection = () => {
    return (
        <div>

            <div className="p-10">
                <h2 className="text-xl font-ralway pb-4 text-center">Follow Us Now</h2>
                <p className="font-MyFont text-6xl font-extrabold pb-3 text-center text-[#331A15]">Follow on Instagram</p>
            </div>
            {/* image section */}

            <div className="flex items-center justify-center mb-4 ">
        <div className="w-3/4 border rounded-md grid  grid-cols-2 md:grid-cols-4 gap-7 p-5">
            
             <img src={firstimge} alt=""  />
             <img src={secondimge} alt=""  />
             <img src={thirdimge} alt=""  />
             <img src={fourthimge} alt=""  />
             <img src={fifthimge} alt="" />
             <img src={sixethimge} alt=""  />
             <img src={seventhimge} alt=""  />
             <img src={eigthimge} alt=""  />

        </div>
    </div>

        </div>
    );
};

export default Instasection;