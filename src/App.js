import Navbar from "./components/Navbar.js";

function App() {
    return (
        <div className="flex flex-col h-screen items-center justify-between">

            <div className="flex items-center justify-between h-16 w-full">
                <div className="flex items-center ml-10">
                    <button className="mr-4">EN-FR</button>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <h1 style={{ fontFamily: 'Roboto' }} className="text-2xl ml-8">
                        Bienvenue Sur Panda
                    </h1>
                </div>
                <div className="flex items-center mr-10 md:flex hidden">
                    <a href="#" className="hover:underline">Creer un compte</a>
                    <a href="#" className="ml-4 hover:underline">Se connecter</a>
                </div>
            </div>

            <div className="flex-grow flex justify-center">
                <Navbar />
            </div>

        </div>
    );
}

export default App;
