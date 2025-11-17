
import { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CoffeeCard = ({ coffee, handelDelete }) => {

    const { user } = useContext(AuthContext)

    const handelDeleting = (e) => {
        handelDelete(e)
    }

    return (
        <div>
            <div className=" p-3 md:p-0 ">

                <div className="card card-side bg-[#F5F4F1] ">
                    <figure className="p-5">
                        <img className="w-44 h-60" src={coffee?.imgeurl} alt="Cofee imgre" />
                    </figure>
                    <div className="card-body text-xl font-ralway  justify-center">
                        <h1> <span className="font-semibold">Name:</span> {coffee?.coffeename}</h1>
                        <h1> <span className="font-semibold">Chef:</span> Mr.Raju </h1>
                        <h1 className="pb-4"> <span className="font-semibold">Price:</span> 500 <span>TK</span> </h1>

                        {
                            user && //if admin looged in 
                            <div className="">

                                <button className=" border  rounded-lg p-2 hover:bg-gray-300 mr-2">

                                    <FaEye />

                                </button>

                                <Link to={`/updateCoffee/${coffee._id}`} >
                                    <button className=" border  rounded-lg p-2 hover:bg-gray-300 mr-3">
                                        <MdEdit />

                                    </button>
                                </Link>

                                <button onClick={() => handelDeleting(coffee._id)}
                                    className=" border  rounded-lg p-2 hover:bg-gray-300">
                                    <MdDelete />
                                </button>
                            </div>
                        }


                        {
                            !user &&
                            <div>
                                <Link to={`/coffeeDetails/${coffee._id}`} >
                                    <button
                                        className="  bg-[#E3B577]  text-2xl font-MyFont px-8 py-3  hover:bg-black  text-black hover:text-white border-2 rounded-sm inline-flex justify-center items-center gap-5 "> View details <FaEye /></button>
                                </Link>
                            </div>
                        }



                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;