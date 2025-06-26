import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {


    const {singInUser} = useContext(AuthContext) 

 const handelogin = (e) =>{
     e.preventDefault()
     const form  = e.target;
     const email = form.email.value;
     const password = form.password.value;
     
     //const user  =  {email,password};
     //console.log(user);
     
     singInUser(email,password)
     .then(res =>{console.log(res.user);
     })
     .catch( error =>{
        console.log(error);
        
     })

     
     
 }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <h1 className="text-5xl font-bold pb-10">Login now!</h1>
                    
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        
                        <form className="card-body" onSubmit={handelogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" name="email" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" name="password" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                
                                <input className="btn btn-neutral mt-4" type="submit" value="Login" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;