import AboutUs from "../../../Components/AboutUs/AboutUs";
import ContactUs from "../../../Components/ContanctUs/ContactUs";
import MiddleBanner from "../../../Components/MiddleBanner/MiddleBanner";
import PetCategory from "../../../Components/PetCategory/PetCategory";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetCategory></PetCategory>
            <MiddleBanner></MiddleBanner>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;