
import { useContext } from 'react';
import logo from '../../assets/images/more/logo1.png'
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const Header = () => {

    const { logOutUser, user } = useContext(AuthContext)

    const handelSignOut = () => {
        logOutUser()
    }

    return (
        <div className=''>

            <div className="   h-20 md:h-32 bg-black text-white flex justify-evenly items-center font-MyFont">
                <div className="flex  justify-center items-center gap-4">
                    {/* <img src="logo1" class=" w-10 md:w-20   h-10 md:h-24 " alt="" srcset=""> */}
                    <img src={logo} className='w-10 md:w-20   h-10 md:h-24 '></img>
                    <p className=" text-xl md:text-6xl flex-1 ">Espresso Emporium</p>
                </div>


                {/*  */}

                <div className="flex-none text-xl">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#eceae3] text-black  rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                {
                                    user ? <div>
                                        <ul>
                                            <p>{user?.email}</p>
                                            <a onClick={handelSignOut} className='text-xl'>Logout</a>
                                        </ul>
                                    </div>
                                        :
                                        <div>
                                            <Link className='text-xl' to={'/login'} >Login</Link>
                                        </div>

                                }
                            </li>

                            <li></li>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Header;