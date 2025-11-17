import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Register = () => {
 
    const navigate = useNavigate()
    const { createuser } = useContext(AuthContext)

    const handelegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //const user = { email, password };

        //sent user data to context
        createuser(email, password)
            .then(result => {

                console.log(result);
                
                Swal.fire({
                    title: "Created  Succesfully",
                    icon: "success"
                });
                navigate('/')

            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "failed",
                    icon: "error"
                });

            })

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <h1 className="text-5xl font-bold pb-10">Register now!</h1>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <form className="card-body" onSubmit={handelegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" name="email" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" name="password" placeholder="Password" />


                                <input className="btn btn-neutral mt-4" type="submit" value="Register" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;