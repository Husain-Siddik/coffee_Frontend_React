import { FiCoffee } from "react-icons/fi";
// import coffeeCarsBG from '../../../public/images/more/1.png'
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AllCoffees = () => {
    const [coffees, setcoffees] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {

        fetch('https://coffe-store-server-khaki.vercel.app/addCoffee')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setcoffees(data)
            })
    }, [])

    const handelDelete = (e) => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(e);

                const newCoffees = coffees.filter((coffee) => coffee._id != e);
                setcoffees(newCoffees);

                fetch(`https://coffe-store-server-khaki.vercel.app/addCoffee/${e}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }




    return (
        <div>
            {/*  */}
            <div className=" flex items-center justify-center bg-[url('../../assets/images/more/1.png')] mt-14 z-20 pb-6">
                <div className="container flex flex-col items-center justify-center pt-14 pb-6 ">
                    <h2 className="text-xl font-ralway pb-4">--- Sip & Savor ---</h2>
                    <p className="font-MyFont text-6xl font-extrabold pb-3 text-center text-[#331A15]">Our Popular Products</p>


                    {
                        // if admin logged it will be display
                        user && <div className="bg-[#E3B577] border-2 p-3 text-center flex items-center justify-center gap-4 rounded-lg mt-5">



                            <Link to={'/addCoffee'} >
                                <button className="font-MyFont text-2xl text-white"> Add Coffee <span>

                                </span></button>
                            </Link>

                            <p className="text-2xl">
                                {/* icon  */}
                                <FiCoffee />
                            </p>

                        </div>
                    }


                </div>


            </div>
            {/* coffee cards */}
            <div className="bg-[url('../assets/images/more/5.png')] bg-right bg-no-repeat  pb-5 ">
                <div className="  flex items-center justify-center z-0">
                    <div className=" container  grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 justify-center items-center">

                        {

                            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handelDelete={handelDelete} ></CoffeeCard>)

                        }






                    </div>

                </div>
            </div>





        </div>
    );
};

export default AllCoffees;