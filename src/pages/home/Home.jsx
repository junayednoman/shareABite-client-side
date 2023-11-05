import { Button } from "flowbite-react";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="mt-16 wrapper">
            <Helmet>
                <title>Home | ShareABite - Waste Less, Feed</title>
            </Helmet>
            <h2>This is home</h2>
            <Button color="failure">Purple</Button>

        </div>
    );
};

export default Home;