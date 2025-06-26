import AllCoffees from "../../Components/AllCoffees/AllCoffees";
import Awosomeitem from "../../Components/Awsomeitem/Awosomeitem";
import Banner from "../../Components/Banner/Banner";
import Instasection from "../../Components/instasection/Instasection";



const Home = () => {
    return (
        <div>
            <Banner />
            <Awosomeitem />
            <AllCoffees />
           
            <Instasection/>
        </div>
    );
};

export default Home;