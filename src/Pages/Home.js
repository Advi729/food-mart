import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Provider } from "react-redux";
import store from "../store/store";

function Home() {
    return (
        <>
        {/* <Provider store={store}> */}
            <Header/>
            <Outlet/>
            <Footer/>
        {/* </Provider> */}
        </>
    );
};

export default Home;