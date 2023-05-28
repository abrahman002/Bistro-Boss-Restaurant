import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Cetagorys from "../Cetagorys/Cetagorys";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
              
            </Helmet>
            <Banner></Banner>
            <Cetagorys></Cetagorys>
            <PopulerMenu></PopulerMenu>
            <Contact></Contact>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;