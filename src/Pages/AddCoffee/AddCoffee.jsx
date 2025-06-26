import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const AddCoffee = () => {

    const handelAdd = (e) => {
        e.preventDefault()
        const form = e.target;
        const coffeename = form.coffeeName.value;
        const chefName = form.chefName.value;
        const supplyername = form.supplyername.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const imgeurl = form.imgeurl.value;

        const coffee = { coffeename, chefName, supplyername, taste, category, details, imgeurl };


        fetch('https://coffe-store-server-khaki.vercel.app/addCoffee', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(coffee),

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId ) {
                    alert("coffy aded succesfully")
                }

            })


    }

    return (
        <div>

            <div className="bg-[url('../../assets/images/more/11.png')] bg-no-repeat flex items-center justify-center">

                <div className="container  rounded-lg">

                    <div className="py-10">
                        <Link to={'/'}>
                            <p className=" text-3xl font-MyFont font-semibold flex  items-center gap-5 ">
                                <span>
                                    <MdKeyboardBackspace />
                                </span>
                                Back to home
                            </p>
                        </Link>
                    </div>
                    {/* <!--  from here --> */}

                    <div className=" bg-[#F4F3F0] md:p-28 space-y-10">
                        {/* <!-- text item  --> */}
                        <div className="text-center ">
                            <h1 className="font-MyFont text-5xl font-semibold pb-9
                    ">Add New Coffee Details</h1>
                            <p className="text-xl font-ralway">It is a long established fact that a reader will be distraceted by
                                the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <form onSubmit={handelAdd} >
                            <div className=" grid grid-cols-1 md:grid-cols-2   gap-3 md:gap-7">

                                <label className="form-control w-full px-4 ">
                                    <div className="label">
                                        <span className="font-ralway text-xl">Name</span>

                                    </div>
                                    <input type="text" name="coffeeName" placeholder="Enter coffee name" className="input input-bordered w-full " />

                                </label>
                                <label className="form-control w-full px-4 ">
                                    <div className="label">
                                        <span className="font-ralway text-xl">Chef</span>

                                    </div>
                                    <input type="text" name="chefName" placeholder="Enter coffee chef" className="input input-bordered w-full " />

                                </label>

                                <label className="form-control w-full px-4 ">
                                    <div className="label">
                                        <span className="font-ralway text-xl">Supplier</span>

                                    </div>
                                    <input type="text" name="supplyername" placeholder="Enter coffee supplier"
                                        className="input input-bordered w-full " />

                                </label>
                                <label className="form-control w-full px-4 ">
                                    <div className="label">
                                        <span className="font-ralway text-xl">Taste</span>

                                    </div>
                                    <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full " />

                                </label>

                                <label className="form-control w-full px-4 ">
                                    <div className="label">
                                        <span className="font-ralway text-xl">Category</span>

                                    </div>
                                    <input type="text" name="category" placeholder="Enter coffee category"
                                        className="input input-bordered w-full " />

                                </label>
                                <label className="form-control w-full px-4 ">
                                    <div className="label">
                                        <span className="font-ralway text-xl">Details</span>

                                    </div>
                                    <input type="text" name="details" placeholder="Enter coffee details"
                                        className="input input-bordered w-full " />

                                </label>

                            </div>

                            <div className="  text-center  flex flex-col mt-3 items-center    ">


                                <label className="form-control w-full px-4 ">
                                    <div className=" text-left ">
                                        <span className="font-ralway  text-xl">Image Url</span>

                                    </div>
                                    <input type="text" name="imgeurl" placeholder="Enter coffee image URL"
                                        className="input input-bordered w-full  " />

                                </label>

                                <div className="w-full pl-4 pr-4 ">
                                    <button type="submit "
                                        className="w-full  font-MyFont text-2xl p-3  rounded-lg mt-5  bg-[#D2B48C] ">Add Coffee
                                    </button>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddCoffee;