
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee,handelDelete }) => {
    console.log(coffee);
    

    const handelDeleting = (e) => {
        handelDelete(e)
    }

    return (
        <div>
            <div className=" p-3 md:p-0 ">

                <div className="card card-side bg-[#F5F4F1] ">
                    <figure className="p-5">
                        <img className="w-44 h-60" src={coffee.imgeurl}  alt="Cofee imgre" />
                    </figure>
                    <div className="card-body text-xl font-ralway  justify-center">
                        <h1> <span className="font-semibold">Name:</span> {coffee.coffeename}</h1>
                        <h1> <span className="font-semibold">Chef:</span> Mr.Raju </h1>
                        <h1 className="pb-4"> <span className="font-semibold">Price:</span> 500 <span>TK</span> </h1>

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

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;