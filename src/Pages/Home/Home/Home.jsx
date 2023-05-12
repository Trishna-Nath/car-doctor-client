import About from "../About/About";
import Banner from "../Banner/Banner";
import Srvices from "./Services/Srvices";


const Home = () => {
    return (
        <div className="mt-8">
            <Banner></Banner>
            <About></About>
            <Srvices></Srvices>
        </div>
    );
};

export default Home;