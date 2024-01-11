import DomeStyledImage from "./components/DomeStyledImage.js";
import InvertedPartialDome from "./components/InvertedPartialDome.js";
import Navbar from "./components/Navbar.js";
import PartialDome from "./components/PartialDome.js";
import TransparentFullDome from "./components/TransparentFullDome.js";



function App() {
    const missions = [
        {
            number: 1,
            task: 'Network',
            description: 'Building a robust network of professionals and enthusiasts to share knowledge and foster collaboration in the field.'
        },
        {
            number: 2,
            task: 'Sharing',
            description: 'Encouraging the sharing of ideas, experiences, and resources to create a supportive and knowledge-rich community.'
        },
        {
            number: 3,
            task: 'Recruitment',
            description: 'Identifying and recruiting top talents who are passionate about our mission and can contribute significantly to our goals.'
        },
        {
            number: 4,
            task: 'Collaborations',
            description: 'Forging partnerships and collaborations with like-minded organizations to amplify our impact and achieve shared objectives.'
        },
        {
            number: 5,
            task: 'Events',
            description: 'Organizing and hosting events that facilitate learning, networking, and engagement among our community members and beyond.'
        }
    ];

    const functiones = [
        {
            func: 'SELECTION',
            desc: 'Enhance user experience with interactive and intuitive selection features.'
        },
        {
            func: 'PUBLICATION',
            desc: 'Efficiently manage and showcase publications to a global audience.'
        },
        {
            func: 'TRAVEL MAP',
            desc: 'Integrate interactive maps for seamless navigation and location-based services.'
        },
        {
            func: 'FILTERS',
            desc: 'Create and customize powerful filters to refine data and content efficiently.'
        },
        {
            func: 'NOTIFICATION',
            desc: 'Implement real-time notifications to keep users informed and engaged.'
        }
    ];



    return (
        <div className="grid grid-cols-4 s gap-1">


            <div className="col-span-1" >
                <button className="mr-4">EN-FR</button>
            </div>
            <div className="col-span-2">
                <h1 style={{ fontFamily: 'Roboto' }} className="text-2xl ml-8 font-medium">
                    Bienvenue <br className="md:hidden" />Sur Panda
                </h1>
            </div>
            <div className="col-span-1 md:flex hidden">
                <a href="#" className="hover:underline">Create Account</a>
                <a href="#" className="ml-4 hover:underline">Log In</a>
            </div>


            <div className="col-span-4 flex justify-center">
                <Navbar />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2 text-4xl font-medium" >
                <p style={{ fontFamily: 'Poppins' }}>We bring together experts from around the world and organizations in Africa</p>
            </div>

            <div className="col-span-1"></div>

            <div className="col-span-1" style={{ fontFamily: 'Poppins' }}>
                <h1 className="font-medium text-left text-xl text-red-700" >Organisations of Africa</h1>
                <p className="text-left text-sm">Africa hosts a multitude of organizations, including the African Union (AU) for continental cooperation. Non-profits like the African Development Foundation focus on sustainable development, while multinational corporations contribute to economic growth. These entities collectively address diverse challenges and opportunities in the region.
                </p>
            </div>

            <div className="col-span-2 flex justify-center">
                <DomeStyledImage />
            </div>

            <div className="col-span-1" style={{ fontFamily: 'Poppins' }} >
                <h1 className="font-medium text-left text-xl text-red-700">Experts</h1>
                <p className="text-left text-sm">Experts within African organizations, notably in institutions like the African Union (AU), are instrumental in steering the continent's development. Professionals in non-profit organizations, exemplified by the African Development Foundation, specialize in promoting sustainable development.
                </p>
            </div>

            <div className="col-span-4 flex flex-start">
                <h1 className="text-3xl font-medium" style={{ fontFamily: 'Poppins' }}>Missions de PANDA</h1>
            </div>

            <div className="col-span-4 flex flex-row gap-3">
                {missions.map((mission) => (
                    <TransparentFullDome key={mission.number}
                        number={`0${mission.number}`.padStart(2, '0')} task={mission.task} description={mission.description} />
                ))}

            </div>
            <div className="col-span-4 flex flex-start">
                <h1 className="text-3xl font-medium" style={{ fontFamily: 'Poppins' }}>Functionalities</h1>
            </div>

            <div className="col-span-2 gap-4 flex flex-wrap flex-row">

                {functiones.slice(0, 3).map((item, index) => (
                    <PartialDome key={index} task={item.func} description={item.desc} />
                ))}
                {functiones.slice(3).map((item, index) => (
                    <InvertedPartialDome key={index} task={item.func} description={item.desc} />
                ))}

            </div>




        </div>
    );
}

export default App;
