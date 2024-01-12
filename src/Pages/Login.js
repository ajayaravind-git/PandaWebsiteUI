import AuthForm from "../components/AuthForm";
import WelcomePandaImage from "../components/WelcomePandaImage";

function Login() {
    return (
        <div className="grid grid-cols-5 gap-0">
            <div className="col-span-3">
                <WelcomePandaImage />
            </div>
            <div className="col-span-2">

                <AuthForm createorlog={true} />

            </div>
        </div>
    );
}

export default Login;
