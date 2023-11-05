import { Helmet } from "react-helmet-async";
import Banner from "./sections/banner/Banner";

const Home = () => {
    return (
        <div className="mt-16 wrapper">
            <Helmet>
                <title>Home | ShareABite - Waste Less, Feed</title>
            </Helmet>
            
            <Banner></Banner>

        </div>
    );
};

export default Home;