import Banner from "../components/Banner";
import Header from "../components/Header";
import SpecialityM from "../components/SpecialityM";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <div>
         <Header/>
         <SpecialityM/>
         <TopDoctors/>
         <Banner/>
    </div>
  );
}

export default Home;
