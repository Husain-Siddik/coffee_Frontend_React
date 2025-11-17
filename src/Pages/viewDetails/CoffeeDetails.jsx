import { useLoaderData } from "react-router-dom";
import { FaCircleArrowDown } from "react-icons/fa6";

const CoffeeDetails = () => {


    const {
        category, imgeurl, chefName, details, supplyername,
        

    } = useLoaderData()

    console.log(imgeurl);


    return (
        <div className="border m-4">
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto hover:shadow-2xl transition duration-300">

                {/* Left: Image */}
                <div className="w-[100] md:w-1/2">
                    <img
                        src={imgeurl}
                        alt={name}
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>

                {/* Right: Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{chefName}</h2>
                        <p className="text-sm text-gray-500 mb-1">{category}</p>
                        <p className="text-gray-600 mb-4 text-justify">{details}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-semibold text-brown-600">${supplyername}</span>
                        <button className="bg-brown-600 text-white px-4 py-2 rounded-xl hover:bg-brown-700 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default CoffeeDetails;