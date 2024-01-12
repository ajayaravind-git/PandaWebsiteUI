import { Link } from "react-router-dom";
import ForgotPassword from "../components/ForgotPassword";
import OutlinedDome from "../components/OutlinedDome";
import WelcomePandaImage from "../components/WelcomePandaImage";

function FPassword() {
    return (
        <div className="grid grid-cols-5 gap-0">


            <div className="col-span-3">
                <WelcomePandaImage />
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center">
                <div className="mb-20" style={{ borderBottom: '1px solid lightgray' }}>
                    <Link to={'/register'} className="hover:underline">Join PANDA</Link>
                    <span className="pl-4" style={{ color: 'lightgray' }}>or</span>
                    <Link to={'/login'} className="ml-4 hover:underline">Sign In</Link>
                </div>

                <OutlinedDome>
                    <ForgotPassword />
                </OutlinedDome>


            </div>
        </div>
    );
}

export default FPassword;
