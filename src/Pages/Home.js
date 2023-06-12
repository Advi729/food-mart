import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Home() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default Home;