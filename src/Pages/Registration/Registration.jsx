import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {

  const{createUser}=useContext(AuthContext);

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get("email");
        const password=form.get("password");
        console.log(email,password);
        createUser(email,password)
        .then(res=>{
          console.log(res.user);
        })
        .catch(error=>{
          console.log(error.message);
        })

        

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl mb-4 font-bold">Register Now!!!</h1>
            <p className="text-xl mt-2 mb-2">Please fill out the form below to create an account.</p>

            <button className="btn mt-2 mb-2 btn-primary">Sign Up with Google</button>
            <p className="text-xl mt-2 mb-2">OR</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
            onClick={handleRegister}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" 
                name="email"
                placeholder="email" className="input input-bordered"
                required
                 />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name="password" 
                placeholder="password" className="input input-bordered" 
                required
                 />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              <p className="mt-3">Have an account?please go to the <Link className="text-blue-800 font-bold" to="/logIn">Login </Link> Page </p>
            </form>
           
          </div>
        </div>
      </div>
    );
};

export default Registration;